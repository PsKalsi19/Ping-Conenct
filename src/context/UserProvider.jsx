import { createContext, useContext, useEffect, useReducer,useState } from "react";
import usersReducer from "../reducers/users-reducer";
import { usersInitialState } from "./initial-states/UsersInitialState";
import { AuthContext } from "./AuthProvider";
import {  getAllUsersList, setFollowUser, setUnfollowUser } from "../services/user-services";
import { errorHandler } from "../services/common-util";
import { USERS_ACTION } from "../constants/users-actions";
import { setUserToLocalStorage } from './../services/localstorage-service';
import { editUser } from './../services/auth-services';
import { useLocation, useNavigate } from "react-router-dom";

export const UserContext = createContext()
const UserProvider = ({ children }) => {
    const location=useLocation()
    const navigate=useNavigate()
    const [usersState, usersDispatch] = useReducer(usersReducer, usersInitialState)
    const { authState: { token,user },setAuthState } = useContext(AuthContext)
    const [toggleEditProfile, setToggleEditProfile] = useState(false);

    const { users } = usersState
    const getAllUsers = async () => {
        try {
            const { data: { users } } = await getAllUsersList();
            usersDispatch({ type: USERS_ACTION.SET_ALL_USERS, payload: users })
        } catch (error) {
            errorHandler(error)
        }
    }

    const handleEditUser = async (payload) => {
        try {
          const {
            data: { user },
          } = await editUser({ userData: payload });
          setAuthState((prevVal) => ({ ...prevVal, user: user }));
          usersDispatch({type:USERS_ACTION.UPDATE_USER,payload:[user]})
          if(location.pathname==="/user-details"){
            navigate("/home")
          }
        //   setUserToLocalStorage(user);
        } catch (error) {
          errorHandler(error);
        }
      };

    const getUserByUsername = (userName) => users.find(({ username }) => username === userName)

    const handleFollowRequest = async (id) => {
        try {
            const {data:{user,followUser}} = await setFollowUser(id)
            setUserToLocalStorage(user)
            setAuthState((prevState)=>({...prevState,user:user}))
            usersDispatch({type:USERS_ACTION.UPDATE_USER,payload:[user,followUser]})

        } catch (error) {
            errorHandler(error)
        }
    }

    const handleUnfollowRequest = async (id) => {
        try {
            const {data:{user,followUser}} = await setUnfollowUser(id)
            setUserToLocalStorage(user)
            setAuthState((prevState)=>({...prevState,user:user}))
            usersDispatch({type:USERS_ACTION.UPDATE_USER,payload:[user,followUser]})

        } catch (error) {
            errorHandler(error)
        }
    }

    const getUserIdByUsername = (username) => users.find(user => user.username === username)._id

    
    const getUsersFollowersList = (user) => user?.followers?.map(({ username }) => username) ?? []

    const getUsersFollowingList = (user) => user?.following?.map(({ username }) => username) ?? []

    const getUserAndFollowingsUsername = (user) => user?.following?.reduce((acc, ele) => [...acc, ele.username], [user.username]) ?? [];

    const getUsersNotOnFollowingList=()=>{

      return  users.filter(({username})=>!getUserAndFollowingsUsername(user).includes(username))
    } 

    useEffect(() => {
        if (token === null) return
        getAllUsers()
    }, [token]);

    return (
        <UserContext.Provider value={{
            usersState,
            getUserByUsername,
            handleFollowRequest,
            handleUnfollowRequest,
            getUserIdByUsername,
            getUsersFollowersList,
            getUsersFollowingList,
            getUserAndFollowingsUsername,
            getUsersNotOnFollowingList,
            handleEditUser,
            toggleEditProfile, 
            setToggleEditProfile
        }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
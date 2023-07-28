import { createContext, useEffect, useReducer } from "react";
import usersReducer from "../reducers/users-reducer";
import { usersInitialState } from "./initial-states/UsersInitialState";
import { getAllUsersList, setFollowUser, setUnfollowUser } from "../services/user-services";
import { errorHandler } from "../services/common-util";
import { USERS_ACTION } from "../constants/users-actions";
import { setUserToLocalStorage } from './../services/localstorage-service';
import { editUser } from './../services/auth-services';
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setAuthAndUser } from "../store/authSlice";

export const UserContext = createContext()

const UserProvider = ({ children }) => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch=useDispatch()
    const [usersState, usersDispatch] = useReducer(usersReducer, usersInitialState)
    const {
        token, user
    } = useSelector(store => store.auth);
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
            toast.success("Profile Updated");
            dispatch(setAuthAndUser({ token:token, user: user }));
            usersDispatch({ type: USERS_ACTION.UPDATE_USER, payload: [user] })
            if (location.pathname === "/user-details") {
                navigate("/home")
            }
            //   setUserToLocalStorage(user);
        } catch (error) {
            errorHandler(error);
        }
    };

    const getUserByUsername = (userName) => users.find(({ username }) => username === userName)

    const handleFollowRequest = async (id) => {
        usersDispatch({ type: USERS_ACTION.DISABLE_FOLLOW_BUTTON, payload: true })
        try {
            const { data: { user, followUser } } = await setFollowUser(id)
            setUserToLocalStorage(user)
            toast.success("User Followed")
            dispatch(setAuthAndUser({ token:token, user: user }));
            usersDispatch({ type: USERS_ACTION.UPDATE_USER, payload: [user, followUser] })
            usersDispatch({ type: USERS_ACTION.DISABLE_FOLLOW_BUTTON, payload: false })

        } catch (error) {
            errorHandler(error)
            usersDispatch({ type: USERS_ACTION.DISABLE_FOLLOW_BUTTON, payload: false })
        }
    }

    const handleUnfollowRequest = async (id) => {
        usersDispatch({ type: USERS_ACTION.DISABLE_FOLLOW_BUTTON, payload: true })
        try {
            const { data: { user, followUser } } = await setUnfollowUser(id)
            setUserToLocalStorage(user)
            toast.success("User Unfollowed")
            dispatch(setAuthAndUser({ token:token, user: user }));
            usersDispatch({ type: USERS_ACTION.UPDATE_USER, payload: [user, followUser] })
            usersDispatch({ type: USERS_ACTION.DISABLE_FOLLOW_BUTTON, payload: false })

        } catch (error) {
            errorHandler(error)
            usersDispatch({ type: USERS_ACTION.DISABLE_FOLLOW_BUTTON, payload: false })
        }
    }

    const getUserIdByUsername = (username) => users.find(user => user.username === username)._id


    const getUsersFollowersList = (user) => user?.followers?.map(({ username }) => username) ?? []

    const getUsersFollowingList = (user) => user?.following?.map(({ username }) => username) ?? []

    const getUserAndFollowingsUsername = (user) => user?.following?.reduce((acc, ele) => [...acc, ele.username], [user.username]) ?? [];

    const getUsersNotOnFollowingList = () => {

        return users.filter(({ username }) => !getUserAndFollowingsUsername(user).includes(username))
    }

    useEffect(() => {
        if (token === null) return
        getAllUsers()
    }, [token]);

    return (
        <UserContext.Provider value={{
            usersState,
            usersDispatch,
            getUserByUsername,
            handleFollowRequest,
            handleUnfollowRequest,
            getUserIdByUsername,
            getUsersFollowersList,
            getUsersFollowingList,
            getUserAndFollowingsUsername,
            getUsersNotOnFollowingList,
            handleEditUser,
        }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
import { createContext, useContext, useEffect } from "react";
import { getAllPosts } from "../services/post-service";
import { AuthContext } from "./AuthProvider";

export const UserContext = createContext()

const UserProvider = ({ children }) => {

    // Auth Provider
    const { authState: { token } } = useContext(AuthContext)
    const getPosts = async () => {
        const data = await getAllPosts()
        console.log(data);

    }

    useEffect(() => {
        if (token === null) return
        getPosts()
    }, [token])

    return (
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider >
    )
}
export default UserProvider
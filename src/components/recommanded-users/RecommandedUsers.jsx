import React from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { useContext } from 'react';

const RecommandedUsers = ({ user, clickHandler, btnCTA }) => {
    const { profilePic, firstName, lastName, username,_id } = user
    const { authState } = useContext(AuthContext)
    const currentUser=authState?.user
    return (
        <>
            <div className="flex flex-row col-span-3 ">
                <Link to="/profile" state={user}><img className="w-10 h-10 rounded-full" src={profilePic} alt="avatar" /></Link>
                <div className="flex flex-col ml-4">
                    <p className="font-semibold text-gray-700">{`${firstName} ${lastName}`}</p>
                    <small className="text-xs font-semibold text-gray-500 ">{username}</small>
                </div>
            </div>
            <button disabled={username===currentUser.username} onClick={() => clickHandler(_id)} className="inline-flex items-center justify-center w-24 col-span-1 px-2 text-sm font-medium text-center text-gray-700 rounded-md shadow disabled:cursor-not-allowed disabled:hover:bg-orange-200 disabled:opacity-60 hover:text-gray-100 bg-orange-50 hover:bg-orange-400/80">{btnCTA}</button></>
    );
};

export default RecommandedUsers;
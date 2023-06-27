import { useEffect } from "react";
import EditProfileForm from "../../components/edit-profile-form/EditProfileForm";

const UserDetails = () => {
    useEffect(() => {
        document.title = "USER DETAILS | PING CONNECT";
      }, []);
    return (
        <>
            <EditProfileForm/>
        </>
    );
};

export default UserDetails;
import { useState } from "react";
import { Navigate } from "react-router-dom";
export const ToolbarOptions = ({ user, logout, deleteAccount }) => {

  const [profile, setProfile] = useState(false);

  const profileHandler = () => {
    setProfile(true)
  }

  return (
    <>
    {profile && <Navigate to='/user'/>}
    <div className="profile-options">
        <ul>
            <li onClick={profileHandler}>profile</li>
            <li onClick={logout}>log out</li>
            <li onClick={() => deleteAccount(user)}>delete account</li>
        </ul>
    </div>
    </>
  )
}

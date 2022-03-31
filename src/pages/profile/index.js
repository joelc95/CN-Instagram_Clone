import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import './index.css'
import { Toolbar } from '../../components/toolbar/Toolbar'
import { updatePassword } from '../../utils'

export const Profile = ({ user, setUser }) => {
    const [newPass, setNewPass] = useState();

    const newPassHandler = (event) => {
        event.preventDefault();
        try {
            if (newPass != null) {
                updatePassword(newPass)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
      <>
        {!user && <Navigate to='/'/>}
        <Toolbar username={user}/>
        <div className="update-password-container">
            <form onSubmit={newPassHandler}>
                <p>change password:</p>
                <input 
                    onChange={event => setNewPass(event.target.value)}
                    placeholder='new password'/>
                <button type="submit">update</button>
            </form>
        </div>
      </>
    )
}

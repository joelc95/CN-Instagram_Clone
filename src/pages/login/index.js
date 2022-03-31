import { useState, useEffect } from 'react';
import { tokenLogin } from '../../utils/index';
import {createUser, login} from '../../utils/index';
import { Navigate } from 'react-router-dom';
import './index.css'



export const Login = ({user, setUser}) => {
    
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [bool, setBool] = useState(false);

    useEffect( () => {
        try {
            tokenLogin(setUser);
        } catch (error) {
            console.log(error)
        }
        
    }, []);

    const submitHandler = (event) => {
        event.preventDefault();
        // setUser({ username: username, email: email, pass: pass });
        // If we're logging in...
        if (bool) {
            login(username, pass, setUser);
        } else {
            if (email) {
                createUser(username, email, pass, setUser);
            }
        } 
    };

    return (
    <>
        { user && <Navigate to='/home'/>}
        <div className="login-container">
        { bool ? <h3>Log in</h3> : <h3>Sign Up</h3>}
        <form className="login-form" onSubmit={submitHandler}>
            <input 
                onChange={(event) => setUsername(event.target.value)} 
                placeholder='username'
            /> <br></br>
            {!bool && <input 
                onChange={(event) => setEmail(event.target.value)} 
                placeholder='email'
            />} <br></br>
            <input 
                onChange={(event) => setPass(event.target.value)} 
                placeholder='password'
            /> <br></br>
            <button className="submit-button" type="submit">Submit</button>
        </form>
        { bool ? 
            <p>Click <a className="login-bool" onClick={() => setBool(!bool)}>here</a> to sign up</p>
            : <p>Already have an account? Click <a className="login-bool" onClick={() => setBool(!bool)}>here</a> to log in</p>
        }
        
      </div>
    </>
    )
}
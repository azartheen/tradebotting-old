import {React, useMemo }from 'react';
import { useState, useEffect} from 'react'
import './SignIn.css';
import { useSelector, useDispatch } from "react-redux";
import { loggingIn } from "../reduxEmpire/usersLogin/action";


const SignIn = () => {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    const loginReducer = useSelector((state) => state.loginReducer.isLoggedIn);
    const loginUsers = useSelector((state) => state.loginReducer.users);
    const dispatch = useDispatch();


    //   console.log(loginReducer, loginUsers);

      const auth = (username, password) => {
        if (loginUsers[0].name === username && loginUsers[0].password === password) {
            console.log("Access granted");
            dispatch(loggingIn());
          } else if(loginUsers[1].name === username && loginUsers[1].password === password){
          console.log("Access granted");
          dispatch(loggingIn());
          }
          else {
            console.log("Access Denined");
            alert(`Wrong Info`);
          }
      }
      
      const handleClick = () => {
          auth(username, password)
      }

    return (
        <div className="sign-in-container">
            <p>Welcome to Trade Botting v 1.0. Please, login to continue</p>
            <form onSubmit={handleClick}>
            <input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <button >Sign Me In</button>
            </form>
        </div>
    )
}

export default SignIn

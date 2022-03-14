import React from 'react'
import "./Login.css"
import { Button } from '@mui/material'
import {auth, provider} from '../../Firebase'
import {signInWithPopup} from 'firebase/auth'
import { useDispatch } from 'react-redux'
import  { addUser } from "../../Store/Actions/User" 


const Login = () => {
    const dispatch = useDispatch();

const signIn = () => {
    signInWithPopup (auth,provider).then((result) => {
        console.log(result.user)
        dispatch(addUser(result.user))
    })
    .catch((err) => {
        console.log(err);
    })

  }
return   (  
    
    <div className = "login">
        <div className= "login__logo">
            <img
            src = "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
            alt=""
            />
           
        </div>  
        <Button onClick={signIn}>Sign in</Button>
        
    </div>
  )

}

 export default Login;
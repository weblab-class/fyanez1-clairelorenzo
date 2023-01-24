import { GoogleOAuthProvider, GoogleLogin, googleLogout} from "@react-oauth/google";
import React, { useState } from "react";
import './Login.css'
import Skeleton from "./Skeleton.js";
const GOOGLE_CLIENT_ID = "562487959153-1uimctimfrsv1m8tsus87j34mfbvg6hu.apps.googleusercontent.com";


const Login =(props) =>{
  return(
  <div id="body">
    <h1 className='main'>Login</h1>
    <div className='button'>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID} >
        <GoogleLogin onSuccess={props.login} onError={(err) => console.log(err)} />
    </GoogleOAuthProvider>
    </div>
  </div>
  );

}
export default Login
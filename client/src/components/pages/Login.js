import { GoogleOAuthProvider, GoogleLogin, googleLogout} from "@react-oauth/google";
import React, { useState } from "react";
import './Login.css'

import Skeleton from "./Skeleton.js";
const GOOGLE_CLIENT_ID = "562487959153-1uimctimfrsv1m8tsus87j34mfbvg6hu.apps.googleusercontent.com";


const Login =((props) =>{
  return(
  <body>
  <div id="main">
    <h1 style='color:white;'>Login</h1>
    <div>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID} className='button'>
        <GoogleLogin onSuccess={props.login} onError={(err) => console.log(err)} />
    </GoogleOAuthProvider>
    </div>
  </div>
  </body>);

}

)
export default Login
import React, { useEffect } from "react";
import ImageRotator from './ImageRotator.js'
import ImageRotator2 from './ImageRot2.js'
import ImageRotator3 from './ImageRot3.js'
import ImageRotator4 from './ImageRot4.js'
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import image1 from '../../public/logo.png'
import "../../utilities.css";
import "./Skeleton.css";
import Skeleton from './Skeleton.js'
// import Skeleton from './skeleton.js'
import './biglogo.css'


// var div=document.getElementById('secondpic')
//     div.style.visibility='hidden'
//     setTimeout(function(){
//         div.style.visibility='visible',3000
//     })

const GOOGLE_CLIENT_ID = "562487959153-1uimctimfrsv1m8tsus87j34mfbvg6hu.apps.googleusercontent.com";
const Home=()=> {
document.body.style.backgroundColor = "black";
useEffect(()=>{
    var div=document.getElementById('secondpic')
        const timer = setTimeout(() => {
            div.style.visibility='visible'
        }, 3500)
    return () => clearTimeout(timer)
}, [])
useEffect(()=>{
    var div2=document.getElementById('thirdpic')
        const timer = setTimeout(() => {
            div2.style.visibility='visible'
        }, 7000)
    return () => clearTimeout(timer)
}, [])
useEffect(()=>{
    var div3=document.getElementById('fourthpic')
        const timer = setTimeout(() => {
            div3.style.visibility='visible'
        }, 10500)
    return () => clearTimeout(timer)
}, [])
const Login = ({ userId, handleLogin, handleLogout }) => {
    return (<GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        {userId ? (
          <button
            onClick={() => {
              googleLogout();
              handleLogout();
            }}
          >
            Logout
          </button>
        ) : (
          <GoogleLogin onSuccess={handleLogin} onError={(err) => console.log(err)} />
        )}
        </GoogleOAuthProvider>
    )
        }
return (
<>  
    
    <img className='Logo' src={image1}/>
    <div/>
        <div id='fourthpic' style={{visibility:'hidden'}}><ImageRotator4/></div>
        <div id='thirdpic' style={{visibility:'hidden'}} ><ImageRotator3/></div>
        <div id='secondpic' style={{visibility:'hidden'}}><ImageRotator2/></div>
        <ImageRotator/>
        {/* <Login></Login> */}
        <Skeleton></Skeleton>
        

        
</>
);
};

export default Home
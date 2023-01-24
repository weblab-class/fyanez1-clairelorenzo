import React, { useState, useEffect } from "react";
import  {Router} from "@reach/router";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";

import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import Weather from "./pages/Weather.js";
import MakeMyFit from "./pages/MakeMyFit.js"
import MyItems from "./pages/MyItems.js";
import MyPastOutfits from "./pages/MyPastOutfits.js";
import Suggest_Outfits_Page from  "./pages/suggest_outfit.js";
import RandomShuffler from "./pages/RandomShuffler.js";
import "../utilities.css";
import Navbar from './pages/NavBar.js'
import './pages/NavBar.css'
import ImageRotator from './pages/ImageRotator.js'
import ImageRotator2 from './pages/ImageRot2.js'
import ImageRotator3 from './pages/ImageRot3.js'
import ImageRotator4 from './pages/ImageRot4.js'
import image1 from './../public/logo.png'
import Home from './pages/Home.js'
import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
      }
    });
  }, []);

  const handleLogin = (credentialResponse) => {
    const userToken = credentialResponse.credential;
    const decodedCredential = jwt_decode(userToken);
    console.log(`Logged in as ${decodedCredential.name}`);
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  const handleLogout = () => {
    setUserId(undefined);
    post("/api/logout");
  };
  
  return (
    <>
    <Navbar/>
      <Router>
        <Home path='/'></Home>
        <Skeleton path="/" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} />
        <NotFound default />
        <Home path='/home'/>
        <Weather path='/weather'/> 
        <MakeMyFit path='/MakeMyFit'/>
        <MyItems path='/MyItems'/>
        <MyPastOutfits path='/MyPastOutfits'/>
        <Suggest_Outfits_Page path='/suggest_outfit'/>
        <RandomShuffler path='/RandomShuffler'/>
        
      </Router>
      
      {/* <img src={image1}/>
      <div/>
      <ImageRotator4/>
      <ImageRotator3/>
      <ImageRotator2/>
      <ImageRotator/> */}
      
      
        
      
    </>

  );
};



export default App;


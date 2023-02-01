import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";

import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import Weather from "./pages/Weather.js";
import MakeMyFit from "./pages/MakeMyFit.js";
import MyItems from "./pages/MyItems.js";
import MyPastOutfits from "./pages/MyPastOutfits.js";
import Login from "./pages/Login.js";
import Inspo from "./pages/Inspo.js";
import OutfitGenerator from "./pages/outfitGenerator.js";
import Suggest_Outfits_Page from "./pages/suggest_outfit.js";
import RandomShuffler from "./pages/RandomShuffler.js";
import "../utilities.css";
import Navbar from "./pages/NavBar.js";
import "./pages/NavBar.css";
import ImageRotator from "./pages/ImageRotator.js";
import ImageRotator2 from "./pages/ImageRot2.js";
import ImageRotator3 from "./pages/ImageRot3.js";
import ImageRotator4 from "./pages/ImageRot4.js";
import image1 from "./../public/logo.png";
import Home from "./pages/Home.js";
import { socket } from "../client-socket.js";
import { get, post } from "../utilities";
import { useBoolean } from "@fluentui/react-hooks";
import { Link } from "@reach/router";
import dress_pic from "./pics/dress-silhouette.png";
import shoe_pic from "./pics/running-shoe-silhouette.png";
import bottom_pic from "./pics/pants-silhouette.png";
import top_pic from "./pics/t-shirt-silhouette.png";
import jacket_pic from "./pics/jacket.png";

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);

  //style and temperature
  const [temperature, setTemperature] = useState(71);
  const [style, setStyle] = useState("Formal");
  const chooseTemp = (event) => {
    setTemperature(event.target.value);
  };
  const chooseStyle = (event) => {
    setStyle(event.target.value);
  };

  //////////////////////
  const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
  const [hideDialog2, { toggle: toggleHideDialog2 }] = useBoolean(true);
  const [hideDialog3, { toggle: toggleHideDialog3 }] = useBoolean(true);
  const [hideDialog4, { toggle: toggleHideDialog4 }] = useBoolean(true);
  const [hideDialog5, { toggle: toggleHideDialog5 }] = useBoolean(true);

  const [top, SetTop] = useState(top_pic);
  const [bottom, SetBottom] = useState(bottom_pic);
  const [shoe, SetShoe] = useState(shoe_pic);
  const [dress, SetDress] = useState(dress_pic);
  const [jacket, SetJacket] = useState(jacket_pic);

  const [selectedTop, setSelectedTop] = useState(top_pic);
  const [selectedBottom, setSelectedBottom] = useState(bottom_pic);
  const [selectedShoes, setSelectedShoes] = useState(shoe_pic);
  const [selectedDress, setSelectedDress] = useState(dress_pic);
  const [selectedJacket, setSelectedJacket] = useState(jacket_pic);

  const chooseTop = (event, option) => {
    SetTop(option.imageSrc);
  };

  const chooseBottom = (event, option) => {
    SetBottom(option.imageSrc);
  };

  const chooseShoes = (event, option) => {
    SetShoe(option.imageSrc);
  };

  const chooseDress = (event, option) => {
    SetDress(option.imageSrc);
  };

  const chooseJacket = (event, option) => {
    SetJacket(option.imageSrc);
  };

  const selectTop = () => {
    setSelectedTop(top);
    toggleHideDialog();
  };
  const selectBottom = () => {
    setSelectedBottom(bottom);
    toggleHideDialog2();
  };
  const selectShoes = () => {
    setSelectedShoes(shoe);
    toggleHideDialog3();
  };
  const selectDress = () => {
    setSelectedDress(dress);
    toggleHideDialog4();
  };
  const selectJacket = () => {
    setSelectedJacket(dress);
    toggleHideDialog5();
  };

  const resetItems = () => {
    setSelectedTop(top_pic);
    setSelectedBottom(bottom_pic);
    setSelectedShoes(shoe_pic);
    setSelectedDress(dress_pic);
    setSelectedJacket(jacket_pic);
  };
  ///////////////////////////////////////////////

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
  if (userId) {
    return (
      <div>
        <Navbar logout={handleLogout} />
        <Router>
          <Home path="/"></Home>
          {/* <Skeleton path="/" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} /> */}
          <NotFound default />
          <Home path="/home" />
          <Weather path="/weather" />
          <MakeMyFit path="/MakeMyFit" />
          <MyItems path="/MyItems" userID={userId} />
          <MyPastOutfits path="/MyPastOutfits" />
          <RandomShuffler path="/RandomShuffler" />
          <Inspo path="/Inspo" />
          <OutfitGenerator
            path="/outfitGenerator"
            userID={userId}
            temperature={temperature}
            style={style}
            temperature_function={chooseTemp}
            style_function={chooseStyle}
            top={top}
            bottom={bottom}
            shoe={shoe}
            dress={dress}
            jacket={jacket}
            selectedTop={selectedTop}
            selectedBottom={selectedBottom}
            selectedShoes={selectedShoes}
            selectedDress={selectedDress}
            selectedJacket={selectedJacket}
            chooseTop={chooseTop}
            chooseBottom={chooseBottom}
            chooseShoes={chooseShoes}
            chooseDress={chooseDress}
            chooseJacket={chooseJacket}
            selectTop={selectTop}
            selectBottom={selectBottom}
            selectShoes={selectShoes}
            selectDress={selectDress}
            selectJacket={selectJacket}
            hideDialog={hideDialog}
            hideDialog2={hideDialog2}
            hideDialog3={hideDialog3}
            hideDialog4={hideDialog4}
            hideDialog5={hideDialog5}
            toggleHideDialog={toggleHideDialog}
            toggleHideDialog2={toggleHideDialog2}
            toggleHideDialog3={toggleHideDialog3}
            toggleHideDialog4={toggleHideDialog4}
            toggleHideDialog5={toggleHideDialog5}
            resetItems={resetItems}
          />
          <Suggest_Outfits_Page
            path="/suggest_outfit"
            userID={userId}
            temperature={temperature}
            style={style}
            temperature_function={chooseTemp}
            style_function={chooseStyle}
            top={top}
            bottom={bottom}
            shoe={shoe}
            dress={dress}
            jacket={jacket}
            selectedTop={selectedTop}
            selectedBottom={selectedBottom}
            selectedShoes={selectedShoes}
            selectedDress={selectedDress}
            selectedJacket={selectedJacket}
            chooseTop={chooseTop}
            chooseBottom={chooseBottom}
            chooseShoes={chooseShoes}
            chooseDress={chooseDress}
            chooseJacket={chooseJacket}
            selectTop={selectTop}
            selectBottom={selectBottom}
            selectShoes={selectShoes}
            selectDress={selectDress}
            selectJacket={selectJacket}
            hideDialog={hideDialog}
            hideDialog2={hideDialog2}
            hideDialog3={hideDialog3}
            hideDialog4={hideDialog4}
            hideDialog5={hideDialog5}
            toggleHideDialog={toggleHideDialog}
            toggleHideDialog2={toggleHideDialog2}
            toggleHideDialog3={toggleHideDialog3}
            toggleHideDialog4={toggleHideDialog4}
            toggleHideDialog5={toggleHideDialog5}
            resetItems={resetItems}
          />
        </Router>
      </div>
    );
  } else {
    return <Login login={handleLogin}></Login>;
  }
};

export default App;

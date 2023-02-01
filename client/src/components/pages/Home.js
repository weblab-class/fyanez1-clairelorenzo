import React, { useEffect } from "react";
import ImageRotator from "./ImageRotator.js";
import ImageRotator2 from "./ImageRot2.js";
import ImageRotator3 from "./ImageRot3.js";
import ImageRotator4 from "./ImageRot4.js";
import ImageRotator5 from "./ImageRot5.js";
import image2 from "../pics/logo2.png";
import "./biglogo.css";
import "./home.css";
import { Link } from "@reach/router";


const Home = () => {

  document.body.style.backgroundColor = "black";
  useEffect(() => {
    var div = document.getElementById("secondpic");
    const timer = setTimeout(() => {
      div.style.visibility = "visible";
    }, 3500);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    var div2 = document.getElementById("thirdpic");
    const timer = setTimeout(() => {
      div2.style.visibility = "visible";
    }, 7000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    var div3 = document.getElementById("fourthpic");
    const timer = setTimeout(() => {
      div3.style.visibility = "visible";
    }, 10500);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    var div4 = document.getElementById("fifthpic");
    const timer = setTimeout(() => {
      div4.style.visibility = "visible";
    }, 14000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <html>
        <body className="body">
          <div className="home-background">
            <div id="fifthpic" style={{ visibility: "hidden" }}>
              <ImageRotator5 />
            </div>
            <div id="fourthpic" style={{ visibility: "hidden" }}>
              <ImageRotator4 />
            </div>
            <div id="thirdpic" style={{ visibility: "hidden" }}>
              <ImageRotator3 />
            </div>
            <div id="secondpic" style={{ visibility: "hidden" }}>
              <ImageRotator2 />
            </div>
            <ImageRotator />
            <Link to="/suggest_outfit">
              <button className="button1">Make My Fit</button>
            </Link>
            <Link to="/MyItems">
              <button className="button2">Add New Items</button>
            </Link>
            
          </div>
          
            
          <div className="Logo">
            <img src={image2} />
          </div>
          
         
        </body>
      </html>
    </>
  );

};

export default Home;

import React, { useEffect } from "react";
import ImageRotator from './ImageRotator.js'
import ImageRotator2 from './ImageRot2.js'
import ImageRotator3 from './ImageRot3.js'
import ImageRotator4 from './ImageRot4.js'
import ImageRotator5 from './ImageRot5.js'
import image1 from '../../public/logo.png'
import './biglogo.css'
import './home.css'

import ImageRotator from "./ImageRotator.js";
import ImageRotator2 from "./ImageRot2.js";
import ImageRotator3 from "./ImageRot3.js";
import ImageRotator4 from "./ImageRot4.js";
import image1 from "../../public/logo.png";
import image2 from "../pics/logo2.png";
import "./biglogo.css";

// var div=document.getElementById('secondpic')
//     div.style.visibility='hidden'
//     setTimeout(function(){
//         div.style.visibility='visible',3000
//     })

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

const Home=()=> {
document.body.style.backgroundColor = 'black';
// document.body.style='body'
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
useEffect(()=>{
    var div4=document.getElementById('fifthpic')
        const timer = setTimeout(() => {
            div4.style.visibility='visible'
        }, 14000)
    return () => clearTimeout(timer)
}, [])

return (
<>

    {/* <img class='Logo' src={image1}/> */}
    <div/>
        <div id='fifthpic' style={{visibility:'hidden'}}><ImageRotator5/></div>
        <div id='fourthpic' style={{visibility:'hidden'}}><ImageRotator4/></div>
        <div id='thirdpic' style={{visibility:'hidden'}} ><ImageRotator3/></div>
        <div id='secondpic' style={{visibility:'hidden'}}><ImageRotator2/></div>
        <ImageRotator/>

</>
);
//   return (
//     <>
//       <img class="Logo" src={image2} />
//       <div />
//       <div id="fourthpic" style={{ visibility: "hidden" }}>
//         <ImageRotator4 />
//       </div>
//       <div id="thirdpic" style={{ visibility: "hidden" }}>
//         <ImageRotator3 />
//       </div>
//       <div id="secondpic" style={{ visibility: "hidden" }}>
//         <ImageRotator2 />
//       </div>
//       <ImageRotator />
//     </>
//   );
};
}

export default Home;

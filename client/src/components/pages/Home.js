import React, { useEffect } from "react";
// import axios from 'axios';
import ImageRotator from './ImageRotator.js'
import ImageRotator2 from './ImageRot2.js'
import ImageRotator3 from './ImageRot3.js'
import ImageRotator4 from './ImageRot4.js'
import ImageRotator5 from './ImageRot5.js'
import image1 from '../../public/logo.png'
import image2 from "../pics/logo2.png";
import './biglogo.css';
import './home.css';


// var div=document.getElementById('secondpic')
//     div.style.visibility='hidden'
//     setTimeout(function(){
//         div.style.visibility='visible',3000
//     })

// const Home = () => {
//   document.body.style.backgroundColor = "black";
//   useEffect(() => {
//     var div = document.getElementById("secondpic");
//     const timer = setTimeout(() => {
//       div.style.visibility = "visible";
//     }, 3500);
//     return () => clearTimeout(timer);
//   }, []);
//   useEffect(() => {
//     var div2 = document.getElementById("thirdpic");
//     const timer = setTimeout(() => {
//       div2.style.visibility = "visible";
//     }, 7000);
//     return () => clearTimeout(timer);
//   }, []);
//   useEffect(() => {
//     var div3 = document.getElementById("fourthpic");
//     const timer = setTimeout(() => {
//       div3.style.visibility = "visible";
//     }, 10500);
//     return () => clearTimeout(timer);
//   }, []);

const Home=()=> {
// const axios= require('axios');
// const params={
//     access_key:'5321e0babffa8ce2937bae2764172746',
//     query:'Boston'
// };
// axios.get('https://weatherstack/current',{params})
// .then(response => {
//     const apiResponse=response.data;
//     console.log('temp in $(apiResponse.location.name is $(apiResponse.current.temperature)');
// }).catch(error =>{
//     console.log(error)
// } )


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
    <img className='Logo' src={image2}/>
    <div/>
    <div className='random'>
        <div id='fifthpic' style={{visibility:'hidden'}}><ImageRotator5/></div>
        <div id='fourthpic' style={{visibility:'hidden'}}><ImageRotator4/></div>
        <div id='thirdpic' style={{visibility:'hidden'}} ><ImageRotator3/></div>
        <div id='secondpic' style={{visibility:'hidden'}}><ImageRotator2/></div>
        <ImageRotator/>
    
    </div>
    

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


export default Home;

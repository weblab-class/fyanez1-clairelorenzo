import React from "react";
import ImageRotator from './ImageRotator.js'
import ImageRotator2 from './ImageRot2.js'
import ImageRotator3 from './ImageRot3.js'
import ImageRotator4 from './ImageRot4.js'
import image1 from '../../public/logo.png'
const Home=()=> {
return (
<>
    <img src={image1}/>
        <div/>
        <ImageRotator4/>
        <ImageRotator3/>
        <ImageRotator2/>
        <ImageRotator/>
</>
);
};

export default Home
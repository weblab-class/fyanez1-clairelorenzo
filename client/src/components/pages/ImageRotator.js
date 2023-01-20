import React from "react";
import "./ImageRotator.css";
import {Link} from '@reach/router';
import lol from '../../public/yomama.png'
const ImageRotator = () => {
    return (
        <img className='ImageRotator' src={lol} alt="Outfit"/>
    )
}
export default ImageRotator
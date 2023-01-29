import React from "react";
import "./ImageRot2.css";
import {Link} from '@reach/router';
import image1 from '../../public/yomama.png'
import image2 from '../../public/inspopic3.png'
const ImageRotator2 = () => {
    return (
        <img className='ImageRotator2' src={image2} alt="image2"/>
        // <img className='ImageRotator2' src={image2} alt="suit"/>
    )
}
export default ImageRotator2
import React from "react";
import "./ImageRotator.css";
import {Link} from '@reach/router';
import image1 from '../../public/inspopic1.png'
import image2 from '../../public/yomama2.png'
const ImageRotator1 = () => {
    return (
        <img className='ImageRotator' src={image1} alt="2023"/>
        // <img className='ImageRotator2' src={image2} alt="suit"/>
    )
        
}

export default ImageRotator1
import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";

const MyItems = () => {
    const [fileData,setFileData]=useState(null);
    const fileChangeHandler= (event)=> {
        const file=event.target.files[0];
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload=() => {
            console.log(reader.result)
            setFileData(reader.result)
        };

    };
    
    return (
        // <button></button>
        <div>
        <input type='file' onChange={fileChangeHandler}/> ;
        {fileData != null && <img src={fileData}/>};
        </div>
    )
}

export default MyItems;

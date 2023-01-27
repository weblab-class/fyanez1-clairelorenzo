import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
// import { get } from "core-js/core/dict";
import { get, post } from "../../utilities";
import './MyItems.css'

const MyItems = () => {
  // const [allPictures, setPictures] = useState([]);
  // const [fileData, setFileData] = useState(null);
  // const fileChangeHandler = (event) => {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     console.log(reader.result);
  //     setFileData(reader.result);
  //     post("/api/picture", { file: reader.result });
  //   };
  // };

  //   useEffect(() => {
  //     console.log(JSON.stringify(fileData));
  //   }, [fileData]);

  const [value, setValue] = useState("");
  const savePicture = () => {
    post("/api/picture", { picture: value });
  };
  const changeText = (event) => {
    setValue(event.target.value);
  };

  return (
    // <button></button>
    
    <div>
        <div className='title'>My Items</div>
        <div className='subtitle'>Add New Item:</div>
      <div>
        <div>Upload file here</div>
        <button>
          <a rel="alternate" href="https://imgur.com/upload" target="_blank">
            Test
          </a>
        </button>
      </div>
      <div>
            <input type='text' id='item_name'/>
            <label htmlFor='item_name'>Item Name</label>
            </div>
        <input type="text" onChange={changeText} value={value} />
        <label htmlFor="link_id"> Paste link here!</label>
        
        <input type="submit" value="submit" onClick={savePicture()} />   

      </div>
  );
};

export default MyItems;

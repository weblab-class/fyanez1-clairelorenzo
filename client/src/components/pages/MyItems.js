import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
// import { get } from "core-js/core/dict";
import { get, post } from "../../utilities";

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

  useEffect(() => {
    console.log(JSON.stringify(fileData));
  }, [fileData]);

  return (
    // <button></button>
    <div>
      <div>
        <p>Upload file here</p>
        <button>
          <a rel="alternate" href="https://imgur.com/upload">
            Test
          </a>
        </button>
        {/* <input type="text" onInput={imageHandler}></input>; */}
      </div>
      {/* <input type="file" onChange={fileChangeHandler} /> ;
      {fileData != null && <img src={fileData} />}; */}
    </div>
  );
};

export default MyItems;

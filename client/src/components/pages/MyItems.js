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
      <div>
        <div>Upload file here</div>
        <button>
          <a rel="alternate" href="https://imgur.com/upload" target="_blank">
            Test
          </a>
        </button>
      </div>
      <br />
      <div>
        <input type="text" onChange={changeText} value={value} />
        <input type="submit" value="submit" onClick={savePicture()} />
        <label htmlFor="link_id"> Paste link here!</label>
      </div>
    </div>
  );
};

export default MyItems;

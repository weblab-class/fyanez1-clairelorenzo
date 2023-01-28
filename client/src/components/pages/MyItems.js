import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
// import { get } from "core-js/core/dict";
import { get, post } from "../../utilities";
import "./MyItems.css";

const MyItems = (props) => {
  const [images,SetImages]=useState([]);
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
    post("/api/picture", { picture: value, user: props.userID });
    console.log(value)
  };

  const changeText = (event) => {
    setValue(event.target.value);
  };

  return (
    // <button></button>

    <div>
      
      <div className="title">My Items</div>
      <div className='addNewItemBox'>
      <div className="subtitle">Add New Item:</div>
      <br />
      <div>
        <div className="text">
          Upload file{" "}
          <a rel="alternate" href="https://imgur.com/upload" target="_blank">
            here
          </a>{" "}
          and copy the link
        </div>
      </div>
      <div>
        <input type="text" id="item_name" />
        <label className="text" htmlFor="item_name">
          Item Name
        </label>
      </div>
      <input type="text" onChange={changeText} value={value} />
      <label className="text" htmlFor="link_id">
        {" "}
        Paste link here!
      </label>

      <div className="item-type">
        <select className="dropdown" name="Type">
          <option>Top</option>
          <option>Bottom</option>
          <option>Shoes</option>
          <option>Other</option>
        </select>
        <div className="text">Item Type</div>
      </div>
      <div className="item-type">
        <select  className='dropdown' name='Style'>
          <option>Formal</option>
          <option>Casual</option>
          <option>Sports</option>
          <option>Lounge</option>
          <option>Professional</option>
        </select>
        <div className="text">Item Style</div>
      </div>
      <br />
      <input className="submit" type="submit" value="submit" onClick={savePicture} />
      </div>
      <div>
      <button
              onClick={() => {
      {get("/api/pictures", {item_type: "all", user: props.userID})
                // user: props.userID, item_type: "all"
                .then(response => SetImages(response))}
              }
            }>
              Refresh My Items!
            </button>
      <div>
      {images.map((image, i) => <img className='items' key={i} src={image.item_file} />)}
      </div>
      </div>
    </div>
  );
};

export default MyItems;

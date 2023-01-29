import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
// import { get } from "core-js/core/dict";
import { get, post } from "../../utilities";
import "./MyItems.css";

const MyItems = (props) => {
  const [images, SetImages] = useState([]);
  const [value, setValue] = useState(""); // pic url
  const [item_name, setItemName] = useState(""); // name
  const [item_type, setItemType] = useState(""); // type
  const [item_style, setItemStyle] = useState(""); //style

  const savePicture = () => {
    post("/api/picture", {
      picture: value,
      name: item_name,
      type: item_type,
      style: item_style,
      user: props.userID,
    });
    get("/api/pictures", { item_type: "all", user: props.userID }).then((response) =>
      SetImages(response)
    );
    console.log(value);
  };

  //image url
  const changeText = (event) => {
    setValue(event.target.value);
  };

  //item type
  const changeType = (event) => {
    setItemType(event.target.item_type);
  };

  //item style
  const changeStyle = (event) => {
    setItemStyle(event.target.item_style);
  };

  //item name
  const changeName = (event) => {
    setItemName(event.target.item_name);
  };

  useEffect(() => {
    get("/api/pictures", { item_type: "all", user: props.userID }).then((response) =>
      SetImages(response)
    );
  }, images);

  return (
    // <button></button>

    <div className="main">
      <div className="title">My Items</div>
      <div className="addBox-and-pics">
        <div className="addNewItemBox">
          <br />
          <div className="subtitle">Add New Item:</div>
          <br />
          <div>
            <div>
              Upload file{" "}
              <a rel="alternate" href="https://imgur.com/upload" target="_blank">
                here
                <br />
              </a>{" "}
              and copy the link
            </div>
            <br />
          </div>
          <div className="text">Paste link here!</div>
          <input className="dropdown" type="text" onChange={changeText} value={value} />
          <div>
            <div className="text">Item Name</div>
            <input className="dropdown" type="text" id="item_name" onChange={changeName} />
            <label className="text" htmlFor="item_name"></label>
          </div>
          <label className="text" htmlFor="link_id"></label>

          <div className="item-type"></div>
          <div className="text">Item Type</div>
          <select className="dropdown" name="Type" onChange={changeType}>
            <option>Top</option>
            <option>Bottom</option>
            <option>Shoes</option>
            <option>Other</option>
          </select>
          <div className="text">Item Style</div>
          <select className="dropdown" name="Style" onChange={changeStyle}>
            <option>Formal</option>
            <option>Casual</option>
            <option>Sports</option>
            <option>Lounge</option>
            <option>Professional</option>
          </select>
          <br />
          <input className="submit" type="submit" value="submit" onClick={savePicture} />
        </div>
        <div>
          <div>
            {images.map((image, i) => (
              <img className="items" key={i} src={image.item_file} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyItems;

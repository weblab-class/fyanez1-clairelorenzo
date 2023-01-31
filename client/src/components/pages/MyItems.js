import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
// import { get } from "core-js/core/dict";
import { get, post } from "../../utilities";
import "./MyItems.css";
import Warmth_instructions from "../warmth_instructions";

const MyItems = (props) => {
  const [images, SetImages] = useState([]);
  const [value, setValue] = useState(""); // pic url
  const [item_name, setItemName] = useState(""); // name
  const [item_type, setItemType] = useState("Top"); // type
  const [item_style, setItemStyle] = useState("Formal"); //style
  const [item_color, setItemColor] = useState("Black"); //color
  const [item_warmth, setItemWarmth] = useState(); // warmth

  const savePicture = () => {
    post("/api/picture", {
      picture: value,
      name: item_name,
      type: item_type,
      style: item_style,
      user: props.userID,
      color: item_color,
      warmth: item_warmth,
    }).then(() => {
      get("/api/pictures", { item_type: "all", user: props.userID }).then((response) =>
        SetImages(response)
      );
    });
  };

  //image url
  const changeText = (event) => {
    setValue(event.target.value);
  };

  //item type
  const changeType = (event) => {
    setItemType(event.target.value);
  };

  //item style
  const changeStyle = (event) => {
    setItemStyle(event.target.value);
  };

  //item name
  const changeName = (event) => {
    setItemName(event.target.value);
  };

  //item color
  const changeColor = (event) => {
    setItemColor(event.target.value);
  };

  //item warmth
  const changeWarmth = (event) => {
    setItemWarmth(event.target.value);
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
            <option>Dress</option>
            <option>Jacket</option>
          </select>
          <div className="text">Item Style</div>
          <select className="dropdown" name="Style" onChange={changeStyle}>
            <option>Formal</option>
            <option>Casual</option>
            <option>Sports</option>
            <option>Lounge</option>
            <option>Professional</option>
          </select>
          <div className="text">Color</div>
          <select className="dropdown" onChange={changeColor}>
            <option>Black</option>
            <option>Blue</option>
            <option>Brown</option>
            <option>Gray</option>
            <option>Green</option>
            <option>Orange</option>
            <option>Purple</option>
            <option>Red</option>
            <option>Tan</option>
            <option>Yellow</option>
            <option>White</option>
          </select>
          <div className="text">Warmth Score (1-4)</div>
          <input className="dropdown" type="text" onChange={changeWarmth} />
          <Warmth_instructions></Warmth_instructions>
          <div></div>
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

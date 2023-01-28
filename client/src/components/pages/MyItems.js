import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
// import { get } from "core-js/core/dict";
import { get, post } from "../../utilities";
import "./MyItems.css";

const MyItems = (props) => {
  const [images, SetImages] = useState([]);
  const [value, setValue] = useState("");
  const savePicture = () => {
    post("/api/picture", { picture: value, user: props.userID });
    get("/api/pictures", { item_type: "all", user: props.userID }).then((response) =>
      SetImages(response)
    );
    console.log(value);
  };

  const changeText = (event) => {
    setValue(event.target.value);
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
            <input className="dropdown" type="text" id="item_name" />
            <label className="text" htmlFor="item_name"></label>
          </div>
          <label className="text" htmlFor="link_id"></label>

          <div className="item-type"></div>
          <div className="text">Item Type</div>
          <select className="dropdown" name="Type">
            <option>Top</option>
            <option>Bottom</option>
            <option>Shoes</option>
            <option>Other</option>
          </select>
          <div className="text">Item Style</div>
          <select className="dropdown" name="Style">
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

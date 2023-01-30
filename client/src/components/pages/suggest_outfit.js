import "./suggest_outfit.css";
import React from "react";
import dress_pic from "../pics/dress-silhouette.png";
import shoe_pic from "../pics/running-shoe-silhouette.png";
import bottom_pic from "../pics/pants-silhouette.png";
import top_pic from "../pics/t-shirt-silhouette.png";
import logo from "../pics/logo2.png";
import Popup from "../popup";
// import { Popup } from "@fluentui/react";
import { useBoolean } from "@fluentui/react-hooks";
import { get } from "../../utilities";
import { useState, useEffect } from "react";

const Suggest_Outfits_Page = (props) => {
  const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
  const [hideDialog2, { toggle: toggleHideDialog2 }] = useBoolean(true);
  const [hideDialog3, { toggle: toggleHideDialog3 }] = useBoolean(true);
  const [hideDialog4, { toggle: toggleHideDialog4 }] = useBoolean(true);
  const [images, SetImages] = useState([]);

  const [top, SetTop] = useState(top_pic);
  const [bottom, SetBottom] = useState(bottom_pic);
  const [shoe, SetShoe] = useState(shoe_pic);
  const [dress, SetDress] = useState(dress_pic);

  const chooseTop = (event) => {
    setTop(event.target.value);
  };

  const chooseBottom = (event) => {
    setTop(event.target.value);
  };

  const chooseShoes = (event) => {
    setTop(event.target.value);
  };

  const chooseDress = (event) => {
    setTop(event.target.value);
  };

  return (
    <>
      <html>
        <head>
          <meta charset="UTF-8" />
          <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
          <title>Outfit Generator</title>
          <link rel="stylesheet" href="suggest_outfit.css" />
        </head>

        <body>
          <div className="background">
            <div className="top">
              <br />
              <div className="instructions">Click to add clothing item (optional)</div>
              <br />
            </div>
            <br />
            <br />
            <div className="middle-area">
              <div className="filters">
                <div className="filters-title">Preferences</div>
                <div className="filter_labels" id="weather-title">
                  Temperature
                </div>
                <input id="Weather" class="filter" type="number" placeholder="Enter Here"></input>
                <div className="filter_labels">Material</div>
                <select name="Material" class="filter">
                  <option>None</option>
                  <option>test</option>
                  <option>test</option>
                  <option>test</option>
                </select>
                <div className="filter_labels">Style</div>
                <select name="Style" class="filter">
                  <option>None</option>
                  <option>test</option>
                  <option>test</option>
                  <option>test</option>
                </select>
                <div className="filter_labels">Filter</div>
                <select name="* filter *" class="filter">
                  <option>None</option>
                  <option>test</option>
                  <option>test</option>
                  <option>test</option>
                </select>
              </div>
              <div className="silhouettes-and-buttons">
                <div className="silhouettes">
                  <div className="animate2">
                    <button className="animate" onClick={() => toggleHideDialog()}>
                      <img src={top} class="shirt" />
                      <div className="silhouette-text" id="tops-text">
                        Tops
                      </div>
                    </button>
                  </div>
                  <div className="animate2">
                    <button className="animate" onClick={() => toggleHideDialog2()}>
                      <img src={bottom} className="pants" />
                      <div className="silhouette-text" id="bottoms-text">
                        Bottoms
                      </div>
                    </button>
                  </div>
                  <div className="animate2">
                    <button class="animate" onClick={() => toggleHideDialog3()}>
                      <img src={shoe} class="shoes" />
                      <div className="silhouette-text" id="shoes-text">
                        Shoes
                      </div>
                    </button>
                  </div>
                  <div className="animate2">
                    <button class="animate" onClick={() => toggleHideDialog4()}>
                      <img src={dress} className="dress" />
                      <div className="silhouette-text" id="dresses-text">
                        Dresses
                      </div>
                    </button>
                  </div>
                </div>

                <button className="suggest">Suggest Outfits!</button>
                <button className="reset">Reset</button>
              </div>
            </div>
          </div>
          <Popup
            hideDialog={hideDialog}
            toggleHideDialog={toggleHideDialog}
            userID={props.userID}
            clothing_type={"Top"}
            changeImageFunc={chooseTop}
          ></Popup>
          <Popup
            hideDialog={hideDialog2}
            toggleHideDialog={toggleHideDialog2}
            userID={props.userID}
            clothing_type={"Bottom"}
            changeImageFunc={chooseBottom}
          ></Popup>
          <Popup
            hideDialog={hideDialog3}
            toggleHideDialog={toggleHideDialog3}
            userID={props.userID}
            clothing_type={"Shoes"}
            changeImageFunc={chooseShoes}
          ></Popup>
          <Popup
            hideDialog={hideDialog4}
            toggleHideDialog={toggleHideDialog4}
            userID={props.userID}
            clothing_type={"Other"}
            changeImageFunc={chooseDress}
          ></Popup>
          <div id="root"></div>
          <script src="/bundle.js"></script>

          <div className="logo">
            <img src={logo} />
          </div>
        </body>
      </html>
    </>
  );
};

export default Suggest_Outfits_Page;

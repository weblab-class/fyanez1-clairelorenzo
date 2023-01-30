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

  const [selectedTop, setSelectedTop] = useState(top_pic);
  const [selectedBottom, setSelectedBottom] = useState(bottom_pic);
  const [selectedShoes, setSelectedShoes] = useState(shoe_pic);
  const [selectedDress, setSelectedDress] = useState(dress_pic);

  const chooseTop = (event, option) => {
    SetTop(option.imageSrc);
  };

  const chooseBottom = (event, option) => {
    SetBottom(option.imageSrc);
  };

  const chooseShoes = (event, option) => {
    SetShoe(option.imageSrc);
  };

  const chooseDress = (event, option) => {
    SetDress(option.imageSrc);
  };

  const selectTop = () => {
    setSelectedTop(top);
    toggleHideDialog();
  };
  const selectBottom = () => {
    setSelectedBottom(bottom);
    toggleHideDialog2();
  };
  const selectShoes = () => {
    setSelectedShoes(shoe);
    toggleHideDialog3();
  };
  const selectDress = () => {
    setSelectedDress(dress);
    toggleHideDialog4();
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
                      <img src={selectedTop} class="shirt" />
                      {/* <div className="silhouette-text" id="tops-text">
                        Tops
                      </div> */}
                    </button>
                  </div>
                  <div className="animate2">
                    <button className="animate" onClick={() => toggleHideDialog2()}>
                      <img src={selectedBottom} className="pants" />
                      {/* <div className="silhouette-text" id="bottoms-text">
                        Bottoms
                      </div> */}
                    </button>
                  </div>
                  <div className="animate2">
                    <button class="animate" onClick={() => toggleHideDialog3()}>
                      <img src={selectedShoes} class="shoes" />
                      {/* <div className="silhouette-text" id="shoes-text">
                        Shoes
                      </div> */}
                    </button>
                  </div>
                  <div className="animate2">
                    <button class="animate" onClick={() => toggleHideDialog4()}>
                      <img src={selectedDress} className="dress" />
                      {/* <div className="silhouette-text" id="dresses-text">
                        Dresses
                      </div> */}
                    </button>
                  </div>
                </div>

                <button className="suggest">Suggest Outfits!</button>
                <button className="reset">Reset</button>
              </div>
            </div>
          </div>
          {/* {console.log(selectedKey)} */}
          <Popup
            hideDialog={hideDialog}
            toggleHideDialog={toggleHideDialog}
            userID={props.userID}
            clothing_type={"Top"}
            changeImageFunc={chooseTop}
            select={selectTop}
          ></Popup>
          <Popup
            hideDialog={hideDialog2}
            toggleHideDialog={toggleHideDialog2}
            userID={props.userID}
            clothing_type={"Bottom"}
            changeImageFunc={chooseBottom}
            select={selectBottom}
          ></Popup>
          <Popup
            hideDialog={hideDialog3}
            toggleHideDialog={toggleHideDialog3}
            userID={props.userID}
            clothing_type={"Shoes"}
            changeImageFunc={chooseShoes}
            select={selectShoes}
          ></Popup>
          <Popup
            hideDialog={hideDialog4}
            toggleHideDialog={toggleHideDialog4}
            userID={props.userID}
            clothing_type={"Other"}
            changeImageFunc={chooseDress}
            select={selectDress}
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

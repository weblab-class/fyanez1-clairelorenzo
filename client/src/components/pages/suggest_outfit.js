import "./suggest_outfit.css";
import React from "react";
import dress_pic from "../pics/dress-silhouette.png";
import shoe_pic from "../pics/running-shoe-silhouette.png";
import bottom_pic from "../pics/pants-silhouette.png";
import top_pic from "../pics/t-shirt-silhouette.png";
import logo from "../pics/logo2.png";
import jacket_pic from "../pics/jacket.png";
import Popup from "../popup";
// import { Popup } from "@fluentui/react";
import { useBoolean } from "@fluentui/react-hooks";
import { get } from "../../utilities";
import { useState, useEffect } from "react";
import { Link } from "@reach/router";

const Suggest_Outfits_Page = (props) => {
  // const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
  // const [hideDialog2, { toggle: toggleHideDialog2 }] = useBoolean(true);
  // const [hideDialog3, { toggle: toggleHideDialog3 }] = useBoolean(true);
  // const [hideDialog4, { toggle: toggleHideDialog4 }] = useBoolean(true);
  // const [hideDialog5, { toggle: toggleHideDialog5 }] = useBoolean(true);
  // const [images, SetImages] = useState([]);

  // const [top, SetTop] = useState(top_pic);
  // const [bottom, SetBottom] = useState(bottom_pic);
  // const [shoe, SetShoe] = useState(shoe_pic);
  // const [dress, SetDress] = useState(dress_pic);
  // const [jacket, SetJacket] = useState(jacket_pic);

  // const [selectedTop, setSelectedTop] = useState(top_pic);
  // const [selectedBottom, setSelectedBottom] = useState(bottom_pic);
  // const [selectedShoes, setSelectedShoes] = useState(shoe_pic);
  // const [selectedDress, setSelectedDress] = useState(dress_pic);
  // const [selectedJacket, setSelectedJacket] = useState(jacket_pic);

  // const chooseTop = (event, option) => {
  //   SetTop(option.imageSrc);
  // };

  // const chooseBottom = (event, option) => {
  //   SetBottom(option.imageSrc);
  // };

  // const chooseShoes = (event, option) => {
  //   SetShoe(option.imageSrc);
  // };

  // const chooseDress = (event, option) => {
  //   SetDress(option.imageSrc);
  // };

  // const chooseJacket = (event, option) => {
  //   SetJacket(option.imageSrc);
  // };

  // const selectTop = () => {
  //   setSelectedTop(top);
  //   toggleHideDialog();
  // };
  // const selectBottom = () => {
  //   setSelectedBottom(bottom);
  //   toggleHideDialog2();
  // };
  // const selectShoes = () => {
  //   setSelectedShoes(shoe);
  //   toggleHideDialog3();
  // };
  // const selectDress = () => {
  //   setSelectedDress(dress);
  //   toggleHideDialog4();
  // };
  // const selectJacket = () => {
  //   setSelectedJacket(dress);
  //   toggleHideDialog5();
  // };

  // const resetItems = () => {
  //   setSelectedTop(top_pic);
  //   setSelectedBottom(bottom_pic);
  //   setSelectedShoes(shoe_pic);
  //   setSelectedDress(dress_pic);
  //   setSelectedJacket(jacket_pic);
  // };

  useEffect(() => {
    props.resetItems();
  }, []);

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
                  Temperature (°F)
                </div>
                <input
                  id="Weather"
                  class="filter"
                  type="number"
                  placeholder="Enter Here"
                  onChange={props.temperature_function}
                  required
                ></input>
                <div className="filter_labels">Style</div>
                <select name="Style" class="filter" onChange={props.style_function}>
                  <option>Formal</option>
                  <option>Casual</option>
                  <option>Sports</option>
                  <option>Lounge</option>
                  <option>Professional</option>
                </select>
              </div>
              <div className="silhouettes-and-buttons">
                <div className="silhouettes">
                  <div className="animate2">
                    <button className="animate" onClick={() => props.toggleHideDialog()}>
                      <img src={props.selectedTop} class="shirt" />
                      {/* <div className="silhouette-text" id="tops-text">
                        Tops
                      </div> */}
                    </button>
                  </div>
                  <div className="animate2">
                    <button className="animate" onClick={() => props.toggleHideDialog2()}>
                      <img src={props.selectedBottom} className="pants" />
                      {/* <div className="silhouette-text" id="bottoms-text">
                        Bottoms
                      </div> */}
                    </button>
                  </div>
                  <div className="animate2">
                    <button class="animate" onClick={() => props.toggleHideDialog3()}>
                      <img src={props.selectedShoes} class="shoes" />
                      {/* <div className="silhouette-text" id="shoes-text">
                        Shoes
                      </div> */}
                    </button>
                  </div>
                  <div className="animate2">
                    <button class="animate" onClick={() => props.toggleHideDialog4()}>
                      <img src={props.selectedDress} className="dress" />
                      {/* <div className="silhouette-text" id="dresses-text">
                        Dresses
                      </div> */}
                    </button>
                  </div>
                  <div className="animate2">
                    <button class="animate" onClick={() => props.toggleHideDialog5()}>
                      <img src={props.selectedJacket} className="jacket" />
                      {/* <div className="silhouette-text" id="dresses-text">
                        Dresses
                      </div> */}
                    </button>
                  </div>
                </div>
                <Link to="/outfitGenerator">
                  <button className="suggest">Suggest Outfits!</button>
                </Link>

                <button className="reset" onClick={props.resetItems}>
                  Reset
                </button>
              </div>
            </div>
          </div>
          {/* {console.log(selectedKey)} */}
          <Popup
            hideDialog={props.hideDialog}
            toggleHideDialog={props.toggleHideDialog}
            userID={props.userID}
            clothing_type={"Top"}
            changeImageFunc={props.chooseTop}
            select={props.selectTop}
          ></Popup>
          <Popup
            hideDialog={props.hideDialog2}
            toggleHideDialog={props.toggleHideDialog2}
            userID={props.userID}
            clothing_type={"Bottom"}
            changeImageFunc={props.chooseBottom}
            select={props.selectBottom}
          ></Popup>
          <Popup
            hideDialog={props.hideDialog3}
            toggleHideDialog={props.toggleHideDialog3}
            userID={props.userID}
            clothing_type={"Shoes"}
            changeImageFunc={props.chooseShoes}
            select={props.selectShoes}
          ></Popup>
          <Popup
            hideDialog={props.hideDialog4}
            toggleHideDialog={props.toggleHideDialog4}
            userID={props.userID}
            clothing_type={"Dress"}
            changeImageFunc={props.chooseDress}
            select={props.selectDress}
          ></Popup>
          <Popup
            hideDialog={props.hideDialog5}
            toggleHideDialog={props.toggleHideDialog5}
            userID={props.userID}
            clothing_type={"Jacket"}
            changeImageFunc={props.chooseJacket}
            select={props.selectJacket}
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

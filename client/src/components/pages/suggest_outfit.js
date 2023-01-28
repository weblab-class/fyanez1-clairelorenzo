import "./suggest_outfit.css";
import React from "react";
import dress from "../pics/dress-silhouette.png";
import shoes from "../pics/running-shoe-silhouette.png";
import bottoms from "../pics/pants-silhouette.png";
import tops from "../pics/t-shirt-silhouette.png";
import logo from "../pics/logo2.png";
import Popup from "../popup";
// import { Popup } from "@fluentui/react";
import { useBoolean } from "@fluentui/react-hooks";
import { get } from "../../utilities";
import {useState, useEffect} from "react";



const Suggest_Outfits_Page = (props) => {
  const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
  const [images,SetImages]=useState([]);
  console.log(images)
  // const [userId, setUserId] = useState(null);

  // useEffect(() => {
  //   get("/api/whoami").then((user) => {
  //     if (user._id) {
  //       // they are registed in the database, and currently logged in.
  //       setUserId(user._id);
  //     }
  //   });
  // }, []);

  // const [items, setItems] = useState([]);

  // get("/api/pictures").then((items) => {
  //   setItems(items);
  // });

  // items = items.map((item) => <img src={item.src} />);

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
                      <img src={tops} class="shirt" />
                      <div className="silhouette-text" id="tops-text">
                        Tops
                      </div>
                    </button>
                  </div>
                  <div className="animate2">
                    <button className="animate" onClick={() => toggleHideDialog()}>
                      <img src={bottoms} className="pants" />
                      <div className="silhouette-text" id="bottoms-text">
                        Bottoms
                      </div>
                    </button>
                  </div>
                  <div className="animate2">
                    <button class="animate" onClick={() => toggleHideDialog()}>
                      <img src={shoes} class="shoes" />
                      <div className="silhouette-text" id="shoes-text">
                        Shoes
                      </div>
                    </button>
                  </div>
                  <div className="animate2">
                    <button class="animate" onClick={() => toggleHideDialog()}>
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
          <Popup hideDialog={hideDialog} toggleHideDialog={toggleHideDialog}></Popup>
          <Popup hideDialog={hideDialog} toggleHideDialog={toggleHideDialog}></Popup>
          <Popup hideDialog={hideDialog} toggleHideDialog={toggleHideDialog}></Popup>
          <Popup hideDialog={hideDialog} toggleHideDialog={toggleHideDialog}></Popup>
          <div id="root"></div>
          <script src="/bundle.js"></script>

          <div>
            <button
              onClick={() => {
                get("/api/pictures", {item_type: "all", user: props.userID})
                // user: props.userID, item_type: "all"
                .then(response => SetImages(response));
              }}
            >
              Test
            </button>
            {images.map((image, i) => <img key={i} src={image.item_file} />)}
            <img src={logo} />
          </div>
        </body>
      </html>
    </>
  );
};

export default Suggest_Outfits_Page;

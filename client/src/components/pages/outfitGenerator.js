import "./outfitGenerator.css";
import React from "react";
// import "./suggest_outfit.css";
// import "./MyItems.css";
import { useBoolean } from "@fluentui/react-hooks";
import { get } from "../../utilities";
import { useState, useEffect } from "react";
import { Router } from "@reach/router";
import { getRandomInt, make_outfit, do_colors_match, _pj_snippets } from "./outfit_algorithm.js";
import Suggest_Outfits_Page from "./suggest_outfit";
import { Link } from "@reach/router";

const OutfitGenerator = (props) => {
  const [outfit, setOutfit] = useState("");
  const [outfit2, setOutfit2] = useState("");
  const [dictionary, setDictionary] = useState();
  const [newItems, setNewItems] = useState();

  useEffect(() => {
    console.log("non empty", Object.values(props.itemsFilled));
    let non_empty = Object.values(props.itemsFilled).filter((object) => {
      typeof object === "string";
    });

    let outfit_mapped = non_empty.map((image, i) => (
      <>
        <div className="clothing-item">
          <img className="image" key={i} src={image} />
          <div className="name">chosen item</div>
        </div>
      </>
    ));

    setOutfit2(outfit_mapped);

    console.log("non empty2", non_empty);

    get("/api/pictures", { item_type: "all", user: props.userID }).then((response) => {
      // console.log("data", response);
      // console.log("items filled", props.itemsFilled);
      // for (let item in props.itemsFilled) {
      //   if (Object.keys(props.itemsFilled[item]).length > 0) {
      //     console.log("found", props.itemsFilled[item]);
      //     get("/api/outfit", { user: props.userID, item_file: props.itemsFilled[item] }).then(
      //       (response) => {
      //         console.log("response", response);
      //         props.itemsFilled[item] = response;
      //       }
      //     );
      //   }
      // }
      // console.log("items filled2", props.itemsFilled);
      const generated_outfit = make_outfit(response, [props.temperature, props.style], {
        Top: {},
        Bottom: {},
        Shoes: {},
        Dress: {},
        Jacket: {},
      });
      // console.log("outfit", generated_outfit);
      if (typeof generated_outfit === "string") {
        setOutfit(
          <>
            <div className="nothing-generated">{generated_outfit}</div>
          </>
        );
        console.log("constraints", [props.temperature, props.style]);
      } else {
        let outfit_images = generated_outfit.map((image, i) => (
          <>
            <div className="clothing-item">
              <img className="image" key={i} src={image.item_file} />
              <div className="name">{image.item_name}</div>
            </div>
          </>
        ));

        setOutfit(outfit_images);
      }
    });
  }, []);

  const generate = () => {
    get("/api/pictures", { item_type: "all", user: props.userID }).then((response) => {
      const generated_outfit = make_outfit(response, [props.temperature, props.style], {
        Top: {},
        Bottom: {},
        Shoes: {},
        Dress: {},
        Jacket: {},
      });
      console.log("items filled", props.itemsFilled);
      // console.log("outfit", generated_outfit);
      if (typeof generated_outfit === "string") {
        setOutfit(
          <>
            <div className="nothing-generated">{generated_outfit}</div>
          </>
        );
        console.log("constraints", [props.temperature, props.style]);
      } else {
        let outfit_images = generated_outfit.map((image, i) => (
          <>
            <div className="clothing-item">
              <img className="image" key={i} src={image.item_file} />
              <div className="name">{image.item_name}</div>
            </div>
          </>
        ));

        setOutfit(outfit_images);
      }
    });
  };

  //function result example
  const temp_outfit = [
    { item_file: "https://i.imgur.com/yMOFcnM.jpg", item_name: "asdf" },
    { item_file: "https://i.imgur.com/yMOFcnM.jpg", item_name: "asdf" },
    { item_file: "https://i.imgur.com/yMOFcnM.jpg", item_name: "asdf" },
  ];

  //input example
  //   let current_items = [
  //     { item_style: "formal", item_type: "dress", item_color: "red", item_warmth_score: 2 },

  //     { item_type: "shoes", item_style: "formal", item_color: "black", item_warmth_score: 2 },

  //     { item_type: "shoes", item_style: "casual", item_color: "white", item_warmth_score: 1 },

  //     { item_style: "casual", item_type: "top", item_color: "black", item_warmth_score: 1 },

  //     { item_style: "casual", item_type: "top", item_color: "blue", item_warmth_score: 1 },

  //     { item_style: "casual", item_type: "bottom", item_color: "green", item_warmth_score: 1 },
  //   ];
  //   make_outfit(current_items, [80, "casual"], {});

  return (
    <>
      <html>
        <head>
          <meta charSet="UTF-8" />
          <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
          <title>Outfit Generator</title>
          <link rel="stylesheet" href="outfitGenerator.css" />
        </head>

        <body>
          <div className="white_background">
            <div className="top">
              <br />
              <div className="instructions">Generated Oufit Is:</div>
              <br />
            </div>
          </div>
          <div style={{ visibility: "hidden" }}>h</div>
          <div style={{ visibility: "hidden" }}>h</div>
          <div style={{ visibility: "hidden" }}>h</div>
          <div className="everything">
            {/* {temp_outfit.map((image, i) => (
              <>
                <div className="clothing-item">
                  <img className="image" key={i} src={image.item_file} />
                  <div className="name">{image.item_name}</div>
                </div>
              </>
            ))} */}
            {outfit}
            {/* <div></div>
            {outfit2} */}
          </div>
          <div>
            {" "}
            <Link to="/outfitGenerator" className="link">
              <button className="regenerate" onClick={generate}>
                Regenerate
              </button>
            </Link>
            <div></div>
            <br />
            <br />
            <br />
            <br />
          </div>
        </body>
      </html>
    </>
  );
};

export default OutfitGenerator;

/////////////////////////////////////////////////

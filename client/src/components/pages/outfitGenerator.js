import "./outfitGenerator.css";
import React from "react";
import "./suggest_outfit.css";
import "./MyItems.css";
import { useBoolean } from "@fluentui/react-hooks";
import { get } from "../../utilities";
import { useState, useEffect } from "react";
import { Router } from "@reach/router";
import { getRandomInt, make_outfit, do_colors_match, _pj_snippets } from "./outfit_algorithm.js";
import Suggest_Outfits_Page from "./suggest_outfit";
import { Link } from "@reach/router";

const OutfitGenerator = (props) => {
  const [outfit, setOutfit] = useState("");
  const [dictionary, setDictionary] = useState();

  useEffect(() => {
    get("/api/pictures", { item_type: "all", user: props.userID }).then((response) => {
      const generated_outfit = make_outfit(response, [props.temperature, props.style], {});
      if (typeof generated_outfit === "string") {
        setOutfit(generated_outfit);
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
      const generated_outfit = make_outfit(response, [props.temperature, props.style], {});
      if (typeof generated_outfit === "string") {
        setOutfit(generated_outfit);
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
          <meta charset="UTF-8" />
          <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
          <title>Outfit Generator</title>
          <link rel="stylesheet" href="outfitGenerator.css" />
        </head>

        <body>
        <div className="top" className='white_background'>
        <div className='top'>
        <br />
      <div className="instructions">Generated Oufit Is:</div>
      <br />
      </div>
      </div>
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
          </div>
        </body>
        <Link to="/outfitGenerator" className="link">
          <button className="regenerate" onClick={generate}>
            Regenerate
          </button>
        </Link>
      </html>
    </>
  );
};

export default OutfitGenerator;

/////////////////////////////////////////////////

import "./outfitGenerator.css";
import React from "react";
import { useBoolean } from "@fluentui/react-hooks";
import { get } from "../../utilities";
import { useState, useEffect } from "react";
import { Router } from "@reach/router";
import { getRandomInt, make_outfit, do_colors_match, _pj_snippets } from "./outfit_algorithm.js";
import Suggest_Outfits_Page from "./suggest_outfit";
import { Link } from "@reach/router";

const OutfitGenerator = (props) => {
  const [outfit, SetOutfit] = useState();

  useEffect(() => {
    get("/api/pictures", { item_type: "all", user: props.userID }).then((response) => {
      //run algorithm
      const generated_outfit = make_outfit(response, [props.temperature, props.style], {});

      //turn algorithm output into html
      if (typeof generated_outfit === "string") {
        SetOutfit(generated_outfit);
      } else {
        outfit_images = generated_outfit.map((image, i) => (
          <>
            <div className="clothing-item">
              <img className="image" key={i} src={image.item_file} />
              <div className="name">{image.item_name}</div>
            </div>
          </>
        ));

        SetOutfit(outfit_images);
        console.log(outfit);
      }
    });
  }, []);

  const temp_outfit = [
    { item_file: "https://i.imgur.com/yMOFcnM.jpg", item_name: "asdf" },
    { item_file: "https://i.imgur.com/yMOFcnM.jpg", item_name: "asdf" },
    { item_file: "https://i.imgur.com/yMOFcnM.jpg", item_name: "asdf" },
  ];

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
          <button className="regenerate">Regenerate</button>
        </Link>
      </html>
    </>
  );
};

export default OutfitGenerator;

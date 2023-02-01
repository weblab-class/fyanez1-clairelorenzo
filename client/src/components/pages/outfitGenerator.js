import "./outfitGenerator.css";
import React from "react";
import { useBoolean } from "@fluentui/react-hooks";
import { get } from "../../utilities";
import { useState, useEffect } from "react";
import { Router } from "@reach/router";
import { getRandomInt, make_outfit, do_colors_match, _pj_snippets } from "./outfit_algorithm.js";
import Suggest_Outfits_Page from "./suggest_outfit";

const OutfitGenerator = (props) => {
  //   const [outfits, SetOutfits] = useState([]);

  //   useEffect(() => {
  //     get("/api/pictures", { item_type: "all", user: props.userID }).then((response) => {
  //       //const all_outfits = make_outfit(response, [70, "Formal"], {});
  //       SetOutfits(response);
  //     });
  //   }, []);

  const temp_outfits = {
    top: { item_file: "https://i.imgur.com/yMOFcnM.jpg" },
    bottom: { item_file: "https://i.imgur.com/yMOFcnM.jpg" },
    shoes: { item_file: "https://i.imgur.com/yMOFcnM.jpg" },
  };

  const temp_outfits2 = [
    { item_file: "https://i.imgur.com/yMOFcnM.jpg", item_name: "asdf" },
    { item_file: "https://i.imgur.com/yMOFcnM.jpg", item_name: "asdf" },
    { item_file: "https://i.imgur.com/yMOFcnM.jpg", item_name: "asdf" },
  ];

  const example = {
    top: { item_style: "casual", item_type: "top", item_color: "blue", item_warmth_score: 1 },
    bottom: {
      item_style: "casual",
      item_type: "bottom",
      item_color: "green",
      item_warmth_score: 1,
    },
    shoes: { item_type: "shoes", item_style: "casual", item_color: "white", item_warmth_score: 1 },
  };

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
          {/* <div className="main">
            {temp_outfits.map((image, i) => (
              <img className="image" key={i} src={image.item_file} />
            ))}
          </div> */}
          <div className="everything">
            {temp_outfits2.map((image, i) => (
              <>
                <div className="clothing-item">
                  <img className="image" key={i} src={image.item_file} />
                  <div className="name">{image.item_name}</div>
                </div>
              </>
            ))}
          </div>
        </body>
        <button className="regenerate">Regenerate</button>
      </html>
    </>
  );
};

export default OutfitGenerator;

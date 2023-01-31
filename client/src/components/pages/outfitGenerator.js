import "./outfitGenerator.css";
import React from "react";
import { useBoolean } from "@fluentui/react-hooks";
import { get } from "../../utilities";
import { useState, useEffect } from "react";
import { Router } from "@reach/router";
import { make_outfit, do_colors_match, _pj_snippets } from "./outfit_algorithm.js";

const outfitGenerator = (props) => {
  //   const [items, SetItems] = useState([]);

  //   useEffect(() => {
  //     get("/api/outfits", { item_type: "all", user: props.userID }).then((response) =>
  //       SetItems(response)
  //     );
  //   }, []);

  //   const Outfits = make_outfit(items, props.constraints, props.items_filled);

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
          <div className="main">Test</div>
        </body>
      </html>
    </>
  );
};

export default outfitGenerator;

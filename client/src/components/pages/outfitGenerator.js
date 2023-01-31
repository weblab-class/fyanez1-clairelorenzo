import "./outfitGenerator.css";
import React from "react";
import { useBoolean } from "@fluentui/react-hooks";
import { get } from "../../utilities";
import { useState, useEffect } from "react";
import "./suggest_outfit.css";
import Algorithm from "./outfitAlgorithm";

const outfitGenerator = (props) => {
  const [outfits, setOutfits] = useState({});

  useEffect(() => {
    get("/api/outfits", { item_type: "all", user: props.userID }).then((response) =>
      setOutfits(response)
    );
  }, []);

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

        <body></body>
      </html>
    </>
  );
};

export default outfitGenerator;

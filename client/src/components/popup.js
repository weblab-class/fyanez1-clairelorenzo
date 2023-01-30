import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import { get, post } from "../utilities";

// import * as React from "react";
import { Dialog, DialogType, DialogFooter, ColorPicker } from "@fluentui/react";
import { PrimaryButton, DefaultButton } from "@fluentui/react";
import { ChoiceGroup, ChoiceGroupOption } from "@fluentui/react";
import { ActionButton, IIconProps, iconProps } from "@fluentui/react";
import { initializeIcons } from "@fluentui/react/lib/Icons";
initializeIcons();

import "./popup.css";
import image1 from "./pics/logo2.png";

const options = [
  {
    imageSrc: image1,
    imageSize: { width: 80, height: 100 },
  },
  {
    imageSrc: "https://i.imgur.com/LR24Vao.jpg",
    imageSize: { width: 80, height: 100 },
  },
  {
    imageSrc: "https://i.imgur.com/fjAyhy6.jpg",
    imageSize: { width: 80, height: 100 },
  },
  {
    imageSrc: image1,
    imageSize: { width: 80, height: 100 },
  },
  {
    imageSrc: "https://i.imgur.com/LR24Vao.jpg",
    imageSize: { width: 80, height: 100 },
  },
  {
    imageSrc: "https://i.imgur.com/fjAyhy6.jpg",
    imageSize: { width: 80, height: 100 },
  },
];

const modelProps = {
  isBlocking: false,
  styles: { main: { maxWidth: 600 }, root: { color: "red" } },
  className: "x",
};
const dialogContentProps = {
  type: DialogType.largeHeader,
  title: "Choose an item",
  className: "test",
};

const Popup = (props) => {
  const [images, SetImages] = useState([]);

  useEffect(() => {
    get("/api/pictures", { item_type: "all", user: props.userID }).then((response) => {
      const mappedImages = response.map((image) => ({
        imageSrc: image.item_file,
        imageSize: { width: 75, height: 90 },
      }));
      SetImages(mappedImages);
    });
  }, images);

  return (
    <>
      <Dialog
        hidden={props.hideDialog}
        onDismiss={props.toggleHideDialog}
        dialogContentProps={dialogContentProps}
        modalProps={modelProps}
        minWidth={600}
      >
        <ChoiceGroup defaultSelectedKey="A" options={images} />
        <DialogFooter>
          <PrimaryButton onClick={props.toggleHideDialog} text="Select" />
          <DefaultButton onClick={props.toggleHideDialog} text="Cancel" />
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default Popup;

//asdf

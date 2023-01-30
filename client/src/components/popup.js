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

const modelProps = {
  isBlocking: true,
  styles: { main: { maxWidth: 600 }, root: { color: "red" } },
  className: "x",
};
const dialogContentProps = {
  type: DialogType.normal,
  title: "Choose an item",
  className: "test",
};

const Popup = (props) => {
  const [images, SetImages] = useState([]);

  useEffect(() => {
    get("/api/pictures", { item_type: props.clothing_type, user: props.userID }).then(
      (response) => {
        const mappedImages = response.map((image, i) => ({
          imageSrc: image.item_file,
          selectedImageSrc: image.item_file,
          imageSize: { width: 75, height: 90 },
          key: i.toString(),
          text: image.item_name,
          onChange: props.changeImageFunc,
        }));
        SetImages(mappedImages);
      }
    );
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
        <ChoiceGroup options={images} onChange={props.changeImageFunc} />
        <DialogFooter>
          <DefaultButton className="button" onClick={props.select} text="Select" />
          <DefaultButton onClick={props.toggleHideDialog} text="Cancel" />
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default Popup;

//asdf

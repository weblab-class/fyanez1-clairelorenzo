import * as React from "react";
import { Dialog, DialogType, DialogFooter } from "@fluentui/react";
import { PrimaryButton, DefaultButton } from "@fluentui/react";
import { ChoiceGroup, ChoiceGroupOption } from "@fluentui/react";
import "./popup.css";
import image1 from "./../public/logo.png";
// import { useBoolean } from "@fluentui/react-hooks";

const options = [
  {
    key: "A",
    text: "pic 1",
    iconProps: {
      src: { image1 },
    },
  },
  {
    key: "B",
    text: "pic 2",
    iconProps: {
      src: "https://img.freepik.com/free-photo/empty-save-texture-room-light_1258-175.jpg?w=2000",
      alt: "Option 1 Image",
    },
  },
  {
    key: "C",
    text: "pic 3",
    iconProps: {
      src: "https://img.freepik.com/free-photo/empty-save-texture-room-light_1258-175.jpg?w=2000",
      alt: "Option 1 Image",
    },
  },
];
const modelProps = {
  isBlocking: false,
  styles: { main: { maxWidth: 600 } },
  //   className: "test",
};
const dialogContentProps = {
  type: DialogType.largeHeader,
  title: "Choose an item",
  className: "test",
};

const Popup = (props) => {
  return (
    <>
      <Dialog
        hidden={props.hideDialog}
        onDismiss={props.toggleHideDialog}
        dialogContentProps={dialogContentProps}
        modalProps={modelProps}
        minWidth={600}
      >
        <ChoiceGroup defaultSelectedKey="A" options={options} />
        <DialogFooter>
          <PrimaryButton onClick={props.toggleHideDialog} text="Save" />
          <DefaultButton onClick={props.toggleHideDialog} text="Cancel" />
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default Popup;

import * as React from "react";
import { Dialog, DialogType, DialogFooter } from "@fluentui/react/lib/Dialog";
import { PrimaryButton, DefaultButton } from "@fluentui/react/lib/Button";
import { ChoiceGroup, IChoiceGroupOption } from "@fluentui/react/lib/ChoiceGroup";
// import { useBoolean } from "@fluentui/react-hooks";

const options = [
  { key: "A", text: "Option A" },
  { key: "B", text: "Option B" },
  { key: "C", text: "Option C", disabled: true },
];
const modelProps = {
  isBlocking: false,
  styles: { main: { maxWidth: 450 } },
};
const dialogContentProps = {
  type: DialogType.largeHeader,
  title: "Choose an item",
};

const Popup = (props) => {
  //   const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);

  return (
    <>
      <Dialog
        hidden={props.hideDialog}
        onDismiss={props.toggleHideDialog}
        dialogContentProps={dialogContentProps}
        modalProps={modelProps}
      >
        <ChoiceGroup defaultSelectedKey="B" options={options} />
        <DialogFooter>
          <PrimaryButton onClick={props.toggleHideDialog} text="Save" />
          <DefaultButton onClick={props.toggleHideDialog} text="Cancel" />
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default Popup;

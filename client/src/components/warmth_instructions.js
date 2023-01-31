import * as React from "react";
import { DefaultButton, IButtonProps } from "@fluentui/react/lib/Button";
import { TeachingBubble } from "@fluentui/react/lib/TeachingBubble";
import { useBoolean, useId } from "@fluentui/react-hooks";
import "./warmth_instructions.css";

const warmth_instructions = () => {
  const buttonId = useId("targetButton");
  const [teachingBubbleVisible, { toggle: toggleTeachingBubbleVisible }] = useBoolean(false);
  const exampleSecondaryButtonProps = React.useMemo(
    () => ({
      children: "Close",
      onClick: toggleTeachingBubbleVisible,
    }),
    [toggleTeachingBubbleVisible]
  );

  return (
    <div>
      <DefaultButton
        id={buttonId}
        onClick={toggleTeachingBubbleVisible}
        text={teachingBubbleVisible ? "Warmth Score Chart" : "Warmth Score Chart"}
        className="test"
        class="test"
      />

      {teachingBubbleVisible && (
        <TeachingBubble
          target={`#${buttonId}`}
          secondaryButtonProps={exampleSecondaryButtonProps}
          onDismiss={toggleTeachingBubbleVisible}
          headline="temperature range (°F)"
          classNmae="test"
        >
          <div>1: 70+ </div>
          <div>2: 55-70</div>
          <div>3: 40-55</div>
          4: 0-40
        </TeachingBubble>
      )}
    </div>
  );
};

export default warmth_instructions;

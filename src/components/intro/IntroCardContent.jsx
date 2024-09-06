import React, { useContext } from "react";
import { IntroCardContext } from "./context/IntroCardContext";

function IntroCardContent() {
  const { state } = useContext(IntroCardContext);
  return (
    <div
      style={{
        font: "Plus Jakarta Sans",
        // width: "611px",
        color: "#969696",
        display: "flex",
        flexDirection: "row",
      }}
    >
      IntroCardContent:{state.selected}
      <div>
        <div
          style={{
            background:
              "linear-gradient(177.32deg, #888989 5.6%, #4A4E54 93.28%)",
            boxShadow: "4px 4px 4.9px 0px #00000040",
            width: "8px",
            height: " 64px",
            borderRadius: " 8px",
          }}
        />
      </div>
    </div>
  );
}

export default IntroCardContent;

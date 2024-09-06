import React, { useContext } from "react";
import styles from "./CardBtn.module.css";
import { IntroCardContext } from "./context/IntroCardContext";
function CardBtn({ name }) {
  const { state, dispatch } = useContext(IntroCardContext);
  const btnTheme = {
    backgroundColor: "#28292F",
    color: "white",
  };
  const btnTheme2 = {
    backgroundColor: "transparent",
    color: "#A3ADB2",
  };
  return (
    <button
      className={styles.btn}
      style={state?.selectedId === name ? btnTheme : btnTheme2}
      onClick={() => {
        dispatch({ type: name });
      }}
    >
      {name}
    </button>
  );
}

export default CardBtn;

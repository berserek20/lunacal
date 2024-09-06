import React from "react";
import styles from "./Help.module.css";
import Box from "./Box";
function Help() {
  return (
    <div>
      <div className={styles.boundary}>?</div>
      <div style={{}}>
        <div className={styles.box}></div>
        <div
          style={{
            margin: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box />
          <Box />
          <Box />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Help;

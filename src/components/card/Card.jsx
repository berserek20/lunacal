import React from "react";
import "./Card.css";
import Help from "./Help";
function Card() {
  return (
    <div className="newCardLayout">
      <div classNsame="sidebar">
        <Help />
      </div>
      <div>new</div>
    </div>
  );
}

export default Card;

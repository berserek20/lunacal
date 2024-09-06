import React from "react";
import rect from "../../images/rect.png";

function ImageShowCard({ imgArr }) {
  console.log(imgArr);
  return (
    <div>
      {imgArr?.map((item) => (
        <img
          key={item.id}
          style={{
            width: "190px",
            height: "179px",
            borderRadius: "24px 0px 0px 0px",
            margin: "0.5rem",
          }}
          src={rect}
          alt="hello"
        />
      ))}
    </div>
  );
}

export default ImageShowCard;

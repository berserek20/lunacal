import { useState } from "react";
import withCard from "../card/withCard";
import ImageCardHead from "./ImageCardHead";
import ImageShowCard from "./ImageShowCard";

function ImageCard() {
  const ImageCardTheme = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItem: "center",
  };
  const [imgArr, setImgArr] = useState([
    { id: 1, image: "/Rectangle 5160.png" },
    { id: 2, image: "/Rectangle 5160.png" },
    { id: 3, image: "/Rectangle 5160.png" },
  ]);
  return (
    <div style={ImageCardTheme}>
      <ImageCardHead setImgArr={setImgArr} imgArr={imgArr} />
      <ImageShowCard imgArr={imgArr} />
    </div>
  );
}

export default withCard(ImageCard);

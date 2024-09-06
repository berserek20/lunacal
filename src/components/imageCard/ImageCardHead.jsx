import styles from "./ImageCardHead.module.css";
function ImageCardHead({ setImgArr, imgArr }) {
  return (
    <div className={styles.imageCardNav}>
      <button className={styles.gallery}>Gallery</button>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button
          className={styles.add}
          onClick={() => {
            setImgArr([
              ...imgArr,
              { id: imgArr.length + 1, image: "/public/house.png" },
            ]);
          }}
        >
          + Add Images
        </button>
        <button className={styles.moveLeft}>{" <-- "}</button>
        <button className={styles.moveRight}>{"-->"}</button>
      </div>
    </div>
  );
}

export default ImageCardHead;

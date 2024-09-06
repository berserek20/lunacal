import Help from "./Help";
import styles from "./withCard.module.css";
const theme = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItem: "center",
};
const withCard = (OldCard) => {
  return function EnhancedCard(porps) {
    return (
      <div style={theme}>
        <div className={styles.newCardLayout}>
          <div className={styles.sidebar}>
            <Help />
          </div>
          <OldCard />
        </div>
        <div className={styles.endLine} />
      </div>
    );
  };
};
export default withCard;

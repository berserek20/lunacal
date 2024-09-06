import styles from "./IntroCardHead.module.css";
import CardBtn from "./CardBtn";
function IntroCardHead() {
  return (
    <div className={styles.list}>
      <CardBtn name="About" />
      <CardBtn name="Experience" />
      <CardBtn name="Recomended" />
    </div>
  );
}

export default IntroCardHead;

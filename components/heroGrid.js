import styles from "./herogrid.module.scss";

export default function HeroGrid() {
  return (
    <div className={styles.grid}>
      <div className={styles.img1}></div>
      <div className={styles.img2}></div>
      <div className={styles.title}>
        <h1>
          Helping people render intent that empowers everyone,
          <br />
          with design.
        </h1>
      </div>
      <div className={styles.img3}></div>
      <div className={styles.img4}></div>
    </div>
  );
}

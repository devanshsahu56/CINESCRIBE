import React from "react";
import styles from "./style.module.css";
import Link  from "next/link";
const page = () => {
  return (
    <>
    <div className={styles.mainDiv}>
      <div className={styles.img}>
        <img src="../cinema2.jpg" alt="" />
      </div>
      <div className={styles.mainsec}>
        <img src="../cinema1.jpg" alt="" />
        <h1>Cinematic</h1>
      </div>
      <div className={styles.img}>
        <img src="../cinema3.jpg" alt="" />
      </div>
    </div>
    <div className={styles.footer}>
      <Link className={styles.link} href='/home'> explore</Link>
    </div>
    </>
  );
};

export default page;

import React from "react";
import styles from './style.module.css'
import Search from '../Search'



const index = () => {
  return (
    <div className={styles.serachelem}>
      <img src="./backimg.jpg" alt="" />
      <Search />
    </div>
  );
};

export default index;

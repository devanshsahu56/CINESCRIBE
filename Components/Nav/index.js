import React from "react";
import styles from "./style.module.css";
import { RiSearchLine, RiNotification2Fill, RiUser3Line } from "react-icons/ri";
 import Link from "next/link";
const page = () => {


  const pageHandler = () => {
    dispatch(changePage(1))
  }

  return (
    <>
      <div className={styles.nav}>
          <Link href="/home">
        <div className={styles.left}>
            <img className={styles.logoimg} src="../logo.png" alt="" />
        </div>
          </Link>
        <div className={styles.mid_div}>
          <li className={styles.dropd}>
            <div className={styles.drpopt}>Movies</div>

            <ul className={styles.dropdown}>
              <li className={styles.drplink}>
                <Link className={styles.lnk} href="/movie/popular">
                  Popular
                </Link>
              </li>
              <li className={styles.drplink}>
                <Link className={styles.lnk} href="/movie/now_playing">
                  Now Playing
                </Link>
              </li>
              <li className={styles.drplink}>
                <Link className={styles.lnk} href="/movie/upcoming">
                  Upcoming
                </Link>
              </li>
              <li className={styles.drplink}>
                <Link className={styles.lnk} href="/movie/top-rated">
                  Top-Rated
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.dropd}>
          <div className={styles.drpopt}>TV Shows</div>

            <ul className={styles.dropdown}>
              <li className={styles.drplink}>
                <Link className={styles.lnk} href="/tv/popular">
                  Popular
                </Link>
              </li>
              <li className={styles.drplink}>
                <Link className={styles.lnk} href="/tv/airing-today">
                  Airing Today
                </Link>
              </li>
              <li className={styles.drplink}>
                <Link className={styles.lnk} href="/tv/on-the-air">
                  On TV
                </Link>
              </li>
              <li className={styles.drplink}>
                <Link className={styles.lnk} href="/tv/top_rated">
                  Top-Rated
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.dropd}>
            <Link className={styles.drpopt} href="/">
              People
            </Link>
            <ul className={styles.dropdown}>
              <li className={styles.drplink}>
                <Link className={styles.lnk} href="/person">
                  Popular People
                </Link>
              </li>
            </ul>
          </li>
          
        </div>
        <div className={styles.right}>
          <img src="../plus.svg" alt="" />
          <div className={styles.en}>en</div>
          <RiNotification2Fill color=" #fff" cursor="pointer" size={20} />
          <RiUser3Line
            className={styles.profile}
            color=" #fff"
            cursor="pointer"
            size={25}
          />
          <RiSearchLine color="#4a4a4a" cursor="pointer" size={23} />
        </div>
      </div>
    </>
  );
};

export default page;

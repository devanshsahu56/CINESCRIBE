import React from "react";
import styles from "./style.module.css";
import { RiSearchLine, RiNotification2Fill ,RiUser3Line} from "react-icons/ri";

import Link from "next/link";
const page = () => {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.left}>
          <Link href='/home'>
            <img className={styles.logoimg} src="../logo.png" alt="" />
          </Link>
        </div>
        <div className={styles.mid_div}>
        <li className={styles.dropd}>
            <Link className={styles.drpopt} href="/">
              Movies
            </Link>
            <ul className={styles.dropdown}>
              <li className={styles.drplink}>
                <Link className={styles.lnk} href="/">
                  Popular
                </Link>
              </li>
              <li className={styles.drplink}>
                <Link className={styles.lnk} href="/">
                  Now Playing
                </Link>
              </li>
              <li className={styles.drplink}>
                <Link className={styles.lnk} href="/">
                  Upcoming
                </Link>
              </li>
              <li className={styles.drplink}>
                <Link className={styles.lnk} href="/">
                  Top-Rated
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.dropd}>
            <Link className={styles.drpopt} href="/">
              TV Shows
            </Link>
            <ul className={styles.dropdown}>
              <li className={styles.drplink}>
                <Link className={styles.lnk} href="/">
                  Popular
                </Link>
              </li>
              <li className={styles.drplink}>
                <Link className={styles.lnk} href="/">
                  Airing Today
                </Link>
              </li>
              <li className={styles.drplink}>
                <Link className={styles.lnk} href="/">
                  On TV
                </Link>
              </li>
              <li className={styles.drplink}>
                <Link className={styles.lnk} href="/">
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
                <Link className={styles.lnk} href="/">
                  Popular People
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.dropd}>
            <Link className={styles.drpopt} href="/">
              More
            </Link>
            <ul className={styles.dropdown}>
              <li className={styles.drplink}>
                <Link className={styles.lnk} href="/">
                  Discussions
                </Link>
              </li>
              <li className={styles.drplink}>
                <Link className={styles.lnk} href="/">
                  Leaderboard
                </Link>
              </li>
              <li className={styles.drplink}>
                <Link className={styles.lnk} href="/">
                  Support
                </Link>
              </li>
              <li className={styles.drplink}>
                <Link className={styles.lnk} href="/">
                  API
                </Link>
              </li>
            </ul>
          </li>
        </div>
        <div className={styles.right}>
          <img src="../plus.svg" alt="" />
          <div className={styles.en}>en</div>
          <RiNotification2Fill color=" #fff" cursor="pointer" size={20} />
          <RiUser3Line className={styles.profile} color=" #fff" cursor="pointer" size={25}/>
          <RiSearchLine color="#4a4a4a" cursor="pointer" size={23}/>
        </div>
      </div>
    </>
  );
};

export default page;

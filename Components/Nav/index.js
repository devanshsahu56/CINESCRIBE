"use client"
import React, { useState } from "react";
import styles from "./style.module.css";
import { RiSearchLine, RiNotification2Fill, RiUser3Line } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/navigation";
const page = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [slug, setSlug] = useState("");
  const toogleSearchBar = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  const router = useRouter();
  const searchHandler = (e) => {
    e.preventDefault();
    router.push(`/searchlist?query=${slug}`);
  };

  const pageHandler = () => {
    dispatch(changePage(1));
  };

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
                <Link className={styles.lnk} href="/movie/popular">
              <li className={styles.drplink}>
                  Popular
              </li>
                </Link>
                <Link className={styles.lnk} href="/movie/now_playing">
              <li className={styles.drplink}>
                  Now Playing
              </li>
                </Link>
                <Link className={styles.lnk} href="/movie/upcoming">
              <li className={styles.drplink}>
                  Upcoming
              </li>
                </Link>
                <Link className={styles.lnk} href="/movie/top-rated">
              <li className={styles.drplink}>
                  Top-Rated
              </li>
                </Link>
            </ul>
          </li>
          <li className={styles.dropd}>
            <div className={styles.drpopt}>TV Shows</div>

            <ul className={styles.dropdown}>
                <Link className={styles.lnk} href="/tv/popular">
              <li className={styles.drplink}>
                  Popular
              </li>
                </Link>
                <Link className={styles.lnk} href="/tv/airing-today">
              <li className={styles.drplink}>
                  Airing Today
              </li>
                </Link>
                <Link className={styles.lnk} href="/tv/on-the-air">
              <li className={styles.drplink}>
                  On TV
              </li>
                </Link>
                <Link className={styles.lnk} href="/tv/top_rated">
              <li className={styles.drplink}>
                  Top-Rated
              </li>
                </Link>
            </ul>
          </li>
          <li className={styles.dropd}>
          <div className={styles.drpopt}>Popular</div>
            <ul className={styles.dropdown}>
                <Link className={styles.lnk} href="/person">
              <li className={styles.drplink}>
                  Popular People
              </li>
                </Link>
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
          <RiSearchLine
            onClick={toogleSearchBar}
            color="#4a4a4a"
            cursor="pointer"
            size={23}
          />
        </div>
      </div>
      {isSearchVisible && (
        <form className={styles.form} onSubmit={searchHandler}>
          <button>
            <RiSearchLine color="#4a4a4a" cursor="pointer" size={23} />
          </button>
          <input
            onChange={(e) => setSlug(e.target.value)}
            type="text"
            placeholder="Search for movie, tv show....."
          />
        </form>
      )}
    </>
  );
};

export default page;

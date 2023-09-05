"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { asyncaddmovies } from "@/store/Actions/movieActions";
import Welcome from "@/Components/Welcome";
import {
  addmovies,
  changepage,
  removeerror,
} from "@/store/Reducers/movieReducer";
import { toast } from "react-toastify";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import styles from "./style.module.css";
export const metadata = {
  title: 'hello',
};

const page = () => {
  const dispatch = useDispatch();
  const { movies, page, error } = useSelector((state) => state.movieReducer);
  if (error.length > 0) {
    error.map((e, i) => {
      toast.error(e);
    });
    dispatch(removeerror());
  }
console.log(movies)
  const getColor = (value) => {
    // Define your color logic here
    if (value >= 70) {
      return "#00ff00"; // Green when value is >= 80
    } else if (value >= 50) {
      return "#ffee00"; // Orange when value is >= 50
    } else {
      return "#ff0000"; // Red when value is less than 50
    }
  };

  const trailcolor = (value) => {
    // Define your color logic here
    if (value >= 70) {
      return "#003d00"; // Green when value is >= 80
    } else if (value >= 50) {
      return "#373300"; // Orange when value is >= 50
    } else {
      return "#300000"; // Red when value is less than 50
    }
  };

  const formatDate = (Dates) => {
    const date = new Date(Dates);

    if (!isNaN(date.getTime())) {
      const outputFormat = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return new Intl.DateTimeFormat("en-US", outputFormat).format(date);
    }
  };

  useEffect(() => {
    dispatch(asyncaddmovies());
  }, [page]);

  return (
    <>
      <Welcome />
      <div className={styles.movieSec}>
        <h1>Trending Movies</h1>
        <div className={styles.movieDiv}>
          {movies.map((m, i) => {
            return (
              <Link className={styles.link} href={`/details/${m.id}`}>
                <div className="me-3 mb-3" key={m.id}>
                  <div className={styles.cardImg}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                      alt=""
                    />
                    <div className={styles.CircularProgressbar}>
                      <CircularProgressbar
                        className={styles.CircularProgress}
                        value={Math.floor(m.vote_average * 10)}
                        text={`${Math.floor(m.vote_average * 10)}%`}
                        styles={buildStyles({
                          strokeLinecap: "round",
                          textSize: "1.5rem",
                          pathTransitionDuration: 1,
                          pathColor: getColor(Math.floor(m.vote_average * 10)),
                          textColor: "#fff",
                          trailColor: trailcolor(
                            Math.floor(m.vote_average * 10)
                          ),
                          strokeWidth: 1,
                          backgroundPadding: 50,
                        })}
                      />
                    </div>
                  </div>
                  <p>{m.title}</p>
                  <h5>{formatDate(m.release_date)}</h5>
                </div>
              </Link>
            );
          })}
        </div>
        <div className=" my-5 text-center paginate">
          <button onClick={() => dispatch(changepage(-1))}>Previous</button>
          <span className="h1">{page}</span>
          <button onClick={() => dispatch(changepage(1))}>Next</button>
        </div>
      </div>
    </>
  );
};

// export const back = back
export default page;

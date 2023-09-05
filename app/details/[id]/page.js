"use client";
import axios from "axios";
import { useState, useEffect, Suspense } from "react";
import styles from "./style.module.css";
import { asyncGetMovieDetails } from "@/store/Actions/movieActions";
import { useDispatch, useSelector } from "react-redux";
import {
  RiListCheck,
  RiBookmarkFill,
  RiHeartFill,
  RiStarFill,
} from "react-icons/ri";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const page = ({ params }) => {
  const [crew, setcrew] = useState([]);
  const [cast, setcast] = useState([]);

  const Id = params.id;

  const dispatch = useDispatch()
  const { MovieDetails } = useSelector((state) => state.movieReducer);
  
  console.log(MovieDetails);
  const [Dates, setDate] = useState("");
  // const [details, setdetails] = useState(null);

  // const GetMovieDetails = async () => {
  //   const { data } = await axios.get(
  //     `https://api.themoviedb.org/3/movie/${Id}?api_key=223667d1239871fc4b6eeef8d0d6def8`
  //   );

  //   setdetails(data);
  //   setDate(data.release_date);
  // };

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

  const timeconvert = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMin = minutes % 60;

    return `${hours}h ${remainingMin}m`;
  };

  const formatDate = (Dates) => {
    const date = new Date(Dates);

    if (!isNaN(date.getTime())) {
      const outputFormat = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      };
      return new Intl.DateTimeFormat("en-US", outputFormat).format(date);
    }
  };

  const formattedDate = formatDate(Dates);

  // crew and cast data

  useEffect(() => {
    // GetMovieDetails();
    dispatch(asyncGetMovieDetails(Id))
  }, []);

  return (
    <div>
      {/* {details ? (
        <div className={styles.full_container}>
          <div className={styles.imgcont}>
            <img
              src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${details.backdrop_path}?api_key=2a325f825de42d66968dbc58f1703c53`}
              alt=""
            />
          </div>
          <div className={styles.img_sec}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${details.poster_path}?api_key=850fa288f19f8f6cc5ac671000c3b31c`}
              alt=""
            />
          </div>
          <div className={styles.details_sec}>
            <h1>
              {" "}
              {details.original_title}{" "}
              <span className={styles.year}>
                ({details.release_date.substr(0, 4)})
              </span>
            </h1>
            <p className={styles.rjt}>
              {formattedDate} •{" "}
              {details.genres?.map((elem) => elem.name).join(", ")} •{" "}
              {timeconvert(details.runtime)}
            </p>
            <div className={styles.container_icon}>
              <div className={styles.CircularProgressbar}>
                <CircularProgressbar
                  className={styles.CircularProgress}
                  value={Math.floor(details.vote_average * 10)}
                  text={`${Math.floor(details.vote_average * 10)}%`}
                  styles={buildStyles({
                    strokeLinecap: "round",
                    textSize: "1.75rem",
                    pathTransitionDuration: 1,
                    pathColor: getColor(Math.floor(details.vote_average * 10)),
                    textColor: "#fff",
                    trailColor: trailcolor(
                      Math.floor(details.vote_average * 10)
                    ),
                    strokeWidth: 1,
                    backgroundPadding: 50,
                  })}
                />
              </div>
              <h3 style={{ color: "#fff", fontSize: "1.2rem" }}>
                User <br /> Score
              </h3>
              <RiListCheck className={styles.ic_sec} color="#fff" size={50} />
              <RiHeartFill className={styles.ic_sec} color="#fff" size={50} />
              <RiBookmarkFill
                className={styles.ic_sec}
                color="#fff"
                size={50}
              />
              <RiStarFill className={styles.ic_sec} color="#fff" size={50} />
            </div>
            <h4>{details.tagline}</h4>
            <div className={styles.overview}>
              <h1>Overview</h1>
              <p>{details.overview}</p>
            </div>
          </div>
        </div>
      ) : (
        <p className={styles.para}>loading....</p>
      )} */}
    </div>
  );
};

export default page;

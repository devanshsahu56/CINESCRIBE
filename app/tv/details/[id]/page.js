"use client";
import axios from "axios";
import { useState, useEffect, Suspense } from "react";
import styles from "./style.module.css";
import { asyncTVdetails } from "@/store/Actions/tvshowAction";
import { useDispatch, useSelector } from "react-redux";
import {
  RiListCheck,
  RiBookmarkFill,
  RiHeartFill,
  RiStarFill,
} from "react-icons/ri";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Link from "next/link";

const page = ({ params }) => {
  const [crew, setcrew] = useState([]);
  const [cast, setcast] = useState([]);

  const Id = params.id;

  const dispatch = useDispatch();
  const { tvDetail } = useSelector((state) => state.tvshowReducer);

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

  const imgErrorHandler = (e) => {
    e.target.style.display = "none"
  }
  // crew and cast data
  const castNcrew = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${Id}/credits?api_key=2a325f825de42d66968dbc58f1703c53`
    );

    setcrew(
      data.crew.filter((crew) => crew.known_for_department === "Creator")
    );
    setcast(data.cast);
  };

  useEffect(() => {
    dispatch(asyncTVdetails(Id));
    castNcrew()
  }, []);

  return (
    <div>
      {tvDetail ? (
        <div className={styles.detscol}>
          <div className={styles.full_container}>
            <div className={styles.imgcont}>
              <img
                src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${tvDetail.backdrop_path}?api_key=2a325f825de42d66968dbc58f1703c53`}
                alt=""
              />
            </div>
            <div className={styles.img_sec}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${tvDetail.poster_path}?api_key=850fa288f19f8f6cc5ac671000c3b31c`}
                alt=""
              />
            </div>
            <div className={styles.details_sec}>
              <h1>
                {" "}
                {tvDetail.original_name}{" "}
                <span className={styles.year}>
                  ({tvDetail.first_air_date?.substr(0, 4)})
                </span>
              </h1>
              <p className={styles.rjt}>
                {tvDetail.genres?.map((elem) => elem.name).join(", ")}
              </p>
              <div className={styles.container_icon}>
                <div className={styles.CircularProgressbar}>
                  <CircularProgressbar
                    className={styles.CircularProgress}
                    value={Math.floor(tvDetail.vote_average * 10)}
                    text={`${Math.floor(tvDetail.vote_average * 10)}%`}
                    styles={buildStyles({
                      strokeLinecap: "round",
                      textSize: "1.75rem",
                      pathTransitionDuration: 1,
                      pathColor: getColor(
                        Math.floor(tvDetail.vote_average * 10)
                      ),
                      textColor: "#fff",
                      trailColor: trailcolor(
                        Math.floor(tvDetail.vote_average * 10)
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
              <h4>{tvDetail.tagline}</h4>
              <div className={styles.overview}>
                <h1>Overview</h1>
                <p>{tvDetail.overview}</p>
              </div>
              <div className={styles.crew}>
                {crew.map((crew, index) => {
                  return (
                    <div key={crew.id} className={styles.director}>
                      <h4>{crew.name}</h4>
                      <p>{crew.known_for_department}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.castNrevenue}>
            <div className={styles.cast}>
              <h2>Top Billed Cast</h2>
              <div className={styles.castBox}>
                {cast.map((casts, i) => {
                  return (
                    <Link className={styles.link} key={i} href={`/person/${casts.id}`}>

                    <div key={i} className={styles.castProfile}>
                      <div className={styles.top}>
                        <img
                          onError={imgErrorHandler}
                          src={`https://image.tmdb.org/t/p/w500/${casts.profile_path}?api_key=2a325f825de42d66968dbc58f1703c53`}
                          alt=""
                        />
                      </div>
                      <div className={styles.bottom}>
                        <h4>{casts.name}</h4>
                        <h5>{casts.character}</h5>
                      </div>
                    </div>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className={styles.revenue}>
              <div className={styles.original}>
                <h4>Original Name</h4>
                <p>{tvDetail.original_name}</p>
              </div>
              <div className={styles.original}>
                <h4>Status</h4>
                <p>{tvDetail.status}</p>
              </div>
              <div className={styles.original}>
                <h4>Network</h4>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "10px",
                  }}
                  className="logos"
                >
                  {tvDetail.networks?.map((logos, idx) => {
                    return (
                      <img
                        key={idx}
                        height={30}
                        src={`https://image.tmdb.org/t/p/w500//${logos.logo_path}?api_key=2a325f825de42d66968dbc58f1703c53`}
                        alt=""
                      />
                    );
                  })}
                </div>
              </div>
              <div className={styles.original}>
                <h4>Type</h4>
                <p>{tvDetail.type}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className={styles.para}>loading....</p>
      )}
    </div>
  );
};

export default page;

"use client";
import axios from "axios";
import { useState, useEffect, Suspense } from "react";

import styles from "./style.module.css";
import { asyncActordetails } from "@/store/Actions/popularActions";
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
  const { actorDetails } = useSelector((state) => state.popularReducer);

  console.log(actorDetails);

  const imgErrorHandler = (e) => {
    e.target.style.display = "none";
  };
  // crew and cast data
  const castNcrew = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/person/${Id}/movie_credits?api_key=2a325f825de42d66968dbc58f1703c53`
    );
    setcast(data.cast);
  };

  console.log(cast);

  useEffect(() => {
    dispatch(asyncActordetails(Id));
    castNcrew();
  }, []);

  return (
    <div>
      {actorDetails ? (
        <div className={styles.detscol}>
          <div className={styles.full_container}>
            <div className={styles.imgcont}>
              <img
                onError={imgErrorHandler}
                src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${actorDetails.profile_path}?api_key=2a325f825de42d66968dbc58f1703c53`}
                alt=""
              />
            </div>
            <div className={styles.img_sec}>
              <img
                onError={imgErrorHandler}
                src={
                  `https://image.tmdb.org/t/p/w500/${actorDetails.profile_path}?api_key=850fa288f19f8f6cc5ac671000c3b31c` ||
                  " ./defaultimg.jpg"
                }
                alt=""
              />
            </div>
            <div className={styles.details_sec} style={{ margin: "50px" }}>
              <h1 style={{ marginBottom: "20px", fontSize: "2.5rem" }}>
                {actorDetails.name}
              </h1>

              <div className={styles.overview}>
                <h1 style={{ marginBottom: "10px" }}>Biography</h1>
                <p>{actorDetails.biography}</p>
              </div>
              <div className={styles.castNrevenue}>
                <div className={styles.cast}>
                  <h2>Known For</h2>
                  <div className={styles.castBox}>
                    {cast.map((casts, i) => {
                      return (
                        <Link
                          className={styles.link}
                          key={i}
                          href={`/movie/details/${casts.id}`}
                        >
                          <div key={cast.id} className={styles.castProfile}>
                            <div className={styles.top}>
                              <img
                                onError={imgErrorHandler}
                                src={`https://image.tmdb.org/t/p/w500/${casts.poster_path}?api_key=2a325f825de42d66968dbc58f1703c53`}
                                alt=""
                              />
                            </div>
                            <div className={styles.bottom}>
                              <h4>{casts.name || casts.original_title}</h4>
                              <h5>{casts.character}</h5>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
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

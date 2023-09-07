"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncPopularActors } from "@/store/Actions/popularActions";
import { changepage, removeerror } from "@/store/Reducers/movieReducer";
import { toast } from "react-toastify";
import "react-circular-progressbar/dist/styles.css";
import ReactPaginate from "react-paginate";
import styles from "@/app/styles/style.module.css";

export const metadata = {
  title: "hello",
};

const page = () => {
  const dispatch = useDispatch();
  const { popularActor, page, error } = useSelector(
    (state) => state.popularReducer
  );
  if (error.length > 0) {
    error.map((e, i) => {
      toast.error(e);
    });
    dispatch(removeerror());
  }
  console.log(popularActor);
  const pages = popularActor.total_pages

  const handlePageClick = (e) => {
    dispatch(changepage(e.selected + 1));
  };

  useEffect(() => {
    dispatch(asyncPopularActors());
  }, [page]);

  return (
    <>
      <div className={styles.movieSec}>
        <h1>Popular People</h1>
        <div className={styles.movieDiv}>
          {popularActor.results?.map((m, i) => {
            return (
              <Link className={styles.link} key={m.id} href={`/person/${m.id}`}>
                <div className="me-3 mb-3" key={m.id}>
                  <div className={styles.cardImg}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${m.profile_path}`}
                      alt=""
                    />
                  </div>
                  <p>{m.name}</p>
                  <h5>
                    {m.known_for?.map((j, i) => {
                      return <span key={i}>{j.title}, </span>;
                    })}
                  </h5>
                </div>
              </Link>
            );
          })}
        </div>
        <div className={styles.button_sec}>
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next ▶"
            onPageChange={handlePageClick}
            onClick={handlePageClick}
            pageCount={pages}
            previousLabel="◀ Previous"
            renderOnZeroPageCount={null}
            initialPage={0}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            activeClassName={styles.active}
            className={styles.paginate}
            pageClassName={styles.pagestyle}
            pageLinkClassName={styles.pagestyleset}
            previousClassName={styles.pagestyle}
            previousLinkClassName={styles.pagestyleset}
            nextClassName={styles.pagestyle}
            nextLinkClassName={styles.pagestyleset}
            breakLinkClassName={styles.brlb}
          />
        </div>
      </div>
    </>
  );
};

// export const back = back
export default page;

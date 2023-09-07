"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "./style.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RiSearchLine } from "react-icons/ri";
import Nav from '@/Components/Nav'

const searchResultPage = () => {
  const router = useRouter();
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(1);
  const searchparams = useSearchParams();
  const search = searchparams.get("query");
  const pageno = searchparams.get("page");

  const [slug, setSlug] = useState(search);
  const [SearchResults, setSearchResults] = useState([]);
  let renderData = <p>loading...</p>;
  if (SearchResults.length > 0) {
    renderData = SearchResults.map((m, i) => {
      return (
        <div className={styles.card} key={i}>
          <div className={styles.imgsec}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${m.poster_path}?api_key=850fa288f19f8f6cc5ac671000c3b31c`}
              alt=""
              onError={(event) => {
                event.target.src = "./defaultimg.jpg";
                event.onerror = null;
              }}
            />
          </div>
          <div className={styles.details}>
            <Link
              className={styles.h1}
              href={
                m.media_type == "movie"
                  ? `/movie/details/${m.id}`
                  : `/tv/details/${m.id}`
              }
            >
              <h1>{m.title || m.original_title || m.name}</h1>
            </Link>
            <h3>{m.release_date || m.first_air_date}</h3>
            <p className={styles.det}>{m.overview}</p>
          </div>
        </div>
      );
    });
  }

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=223667d1239871fc4b6eeef8d0d6def8&query=${search}&page=${page}`
      );
      setSearchResults(data.results);
      setPageCount(data.total_pages);
    } catch (error) {
    }
  };

  const searchHandler = (e) => {
    e.preventDefault();
    router.push(`/searchlist?query=${slug}`);
  };

  const handlePageClick = (e) => {
    setPage(e.selected + 1);
  };

  useEffect(() => {
    fetchData();
  }, [SearchResults, page]);

  return (
    <>
    <Nav/>
    <div className={styles.container}>
      <form className={styles.form} onSubmit={searchHandler}>
        <button>
          <RiSearchLine color="#4a4a4a" cursor="pointer" size={23} />
        </button>
        <input
          value={slug.replace(/%20/g, " ")}
          onChange={(e) => setSlug(e.target.value)}
          type="text"
          placeholder="Search for movie, tv show....."
        />
      </form>
      <div className={styles.cardContainer}>{renderData}</div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next ▶"
        onPageChange={handlePageClick}
        onClick={handlePageClick}
        pageCount={pageCount}
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
    </>
  );
};

export default searchResultPage;


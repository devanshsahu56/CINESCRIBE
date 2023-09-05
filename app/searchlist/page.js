"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "./style.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const searchResultPage = () => {
  const router = useRouter()
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(1);
  const searchparams = useSearchParams();
  const search = searchparams.get("query");
  const pageno = searchparams.get("page");

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
            <Link className={styles.h1} href={`/details/${m.id}`}>
              <h1>{m.original_title || m.original_name}</h1>
            </Link>
            <h3>{m.release_date}</h3>
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
      setPageCount(data.total_pages)
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageClick = (e)=>{
    console.log(e)
    setPage(e.selected + 1)
  }


  useEffect(() => {
    fetchData();
    // window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className={styles.container}>
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
  );
};

export default searchResultPage;

// import React, { useContext } from "react";
//  import styles from "./style.module.css";
// import Link from "next/link";

// const search = () => {
//   const [data, setData] = useContext(CentralisedData);
//   let listRender = <p>loading...</p>;
//
//   console.log(data);
//   return <div className={styles.cardContainer}>{listRender}</div>;
// };

// export default search;

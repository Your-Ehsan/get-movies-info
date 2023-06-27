// import { Link } from "react-router-dom";
import HeroImg from "../assets/wp10615910-movie-collection-wallpapers.jpg";
import { fetchInitialReq } from "../api";
import { useEffect, useState } from "react";
import MovieCard from "./movieCard";
// import { useEffect } from "react";
// import { useState } from "react";

// function string_to_slug(str) {
//   str = str.replace(/^\s+|\s+$/g, ""); // trim
//   str = str.toLowerCase();

//   // remove accents, swap ñ for n, etc
//   var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
//   var to = "aaaaeeeeiiiioooouuuunc------";
//   for (var i = 0, l = from.length; i < l; i++) {
//     str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
//   }

//   str = str
//     .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
//     .replace(/\s+/g, "-") // collapse whitespace and replace by -
//     .replace(/-+/g, "-"); // collapse dashes

//   return str;
// }
// const slug = string_to_slug("Ivan Ironman Stewart's Super Off Road");
// export async function HomeLoader(w, p) {
//   return await fetchInitialReq(w,p);
// }
// console.log(slug);
export default function Home() {
  let [MovieData, setMovieData] = useState(),
    [Page, setPage] = useState(1);
  const [LoadingState, setLoadingState] = useState(false),
    [_Error, setError] = useState(null),
    [searchval, setSearchval] = useState("Avengers");
  async function loadData(_search, _page) {
    setLoadingState(true);
    try {
      const Loadeddata = await fetchInitialReq(_search, _page);
      // return Data;;
      setMovieData(Loadeddata);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoadingState(false);
    }
  }
  useEffect(() => {
    loadData(searchval, Page);
  }, []);

  // const [searchVal, setsearchVal] = useState("avengers");
  // console.log(searchVal);
  // HomeLoader("")

  // console.log(MovieData);
  if (LoadingState) {
    return (
      <>
        <div className="w-screen h-screen grid justify-center items-center bg-base-200">
          <span className="loading loading-dots w-32 md:w-40"></span>
        </div>
      </>
    );
  }
  if (_Error) {
    return <h1>there is an error : {_Error.status}</h1>;
  }
  // console.log(MovieData);
  const pageInfo = Math.floor(MovieData?.totalResults / 10);
  const validKeyForPayment = [
    "keyPress",
    "keypress",
    "Keypress",
    "KeyPress",
    "enter",
    "Enter",
  ];
  return (
    <>
      <div
        className="hero place-items-stretch md:h-screen bg-fixed"
        style={{
          background: `url(${HeroImg}), fixed`,
          height: "90vh",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="flex ml-8 md:ml-48 justify-start items-center text-accent-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold">
              Get Movies Info
            </h1>
            <div className="gap-2 md:gap-4 flex items-end">
              <div className="form-control md:w-full w-3/5">
                <label className="label">
                  <span className="label-text text-white">
                    Search Any Movie&apos;s info
                  </span>
                </label>
                <input
                  value={searchval}
                  onChange={(e) => setSearchval(e.target.value)}
                  type="text"
                  placeholder="Search..."
                  className="input input-bordered w-full max-w-xs bg-white text-black focus:bg-base-100 focus:text-white duration-500"
                  onKeyDown={(e) => {
                    if (validKeyForPayment.includes(e.key)) {
                      e.preventDefault();
                      setPage(1);
                      loadData(searchval, Page);
                    }
                  }}
                />
              </div>
              <button
                className="max-md:text-xs max-md:py-1 max-md:px-2 btn bg-red-500 text-white"
                onClick={() => {
                  setPage(1);
                  loadData(searchval, Page);
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <span className="text-right text-xs italic">
          Photo by
          <a
            className="mx-1 underline"
            rel="noopener noreferrer"
            target="_blank"
            href="https://unsplash.com/@fkaregan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >
            Samuel Regan-Asante
          </a>
          on
          <a
            className="mx-1 underline"
            rel="noopener noreferrer"
            target="_blank"
            href="https://unsplash.com/s/photos/movies-posters?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >
            Unsplash
          </a>
        </span>
      </div>
      {/* {console.log(MovieData.Search)} */}
      <section className="grid items-center justify-items-center grid-cols-1 md:grid-cols-3">
        {MovieData?.totalResults > 0 ? (
          MovieData.Search.map((e, i) => {
            return (
              <>
                <MovieCard search={searchval} card={e} key={i} />
              </>
            );
          })
        ) : (
          <div className="w-full h-screen flex justify-center items-center text-center">
            <h1 className="text-white text-2xl md:text-4xl">
              <span className="text-red-400 font-bold">404</span>
              &nbsp;&mdash;&nbsp;No movies found :(
            </h1>
          </div>
        )}
      </section>
      <div className="my-8 flex justify-center items-center">
        <div className="join">
          <button
            disabled={Page == 1 ? true : false}
            onClick={() => {
              setPage(Page - 1);
              loadData(searchval, Page);
            }}
            className="join-item btn"
          >
            «
          </button>
          {/* {console.log(Page)} */}
          <button className="join-item btn bg-red-400 text-white font-bold">
            {Page}
          </button>
          <button className="join-item btn btn-disabled">...</button>
          {MovieData?.totalResults >= 20 ? (
            <button
              onClick={() => {
                setPage(pageInfo);
                loadData(searchval, Page);
              }}
              className="join-item btn"
            >
              {pageInfo}
            </button>
          ) : null}
          <button
            disabled={Page == pageInfo ? true : false}
            onClick={() => {
              setPage(Page + 1);
              loadData(searchval, Page);
            }}
            className="join-item btn"
          >
            »
          </button>
        </div>
      </div>
    </>
  );
}
/*
{
      "Title": "Ivan Ironman Stewart's Super Off Road",
      "Year": "1989",
      "Rated": "N/A",
      "Released": "01 Apr 1989",
      "Runtime": "N/A",
      "Genre": "Sport",
      "Director": "Medo Moreno, John Rowe, Dan Viescas",
      "Writer": "John Morgan (concept)",
      "Actors": "N/A",
      "Plot": "N/A",
      "Language": "English",
      "Country": "USA",
      "Awards": "N/A",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZDMwMWUyNDAtZmM3Ny00ZGM2LTg5MTItYmZiNzM1NzAyNGJmXkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg",
      "Ratings": [{ "Source": "Internet Movie Database", "Value": "7.4/10" }],
      "Metascore": "N/A",
      "imdbRating": "7.4",
      "imdbVotes": "38",
      "imdbID": "tt0162408",
      "Type": "game", 
      "DVD": "N/A",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",
      "Response": "True"
    }
    {
      "Title": "Ironman Triathlon World Championship",
      "Year": "2006",
      "imdbID": "tt1129378",
      "Type": "movie",
      "Poster": "N/A"
    }
*/

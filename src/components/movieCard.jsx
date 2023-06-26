/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
export default function MovieCard({ card, search }) {
  return (
    <>
      <Link to={card.imdbID}>
        <div className="opacity-100 w-80 card p-4">
          <figure className="">
            <img
              src={
                card.Poster == "N/A"
                  ? `https://source.unsplash.com/random/288x428/?${search}`
                  : card.Poster
              }
              alt={card.Title}
            />
          </figure>
          <div className="card-body bg-base-300 rounded-lg shadow-xl">
            <Link className="text-white" to={card.imdbID}>
              <h2 className="card-title">{card.Title}</h2>
            </Link>
            <div className="flex justify-end">
              <span className="mx-2 uppercase text-opacity-60 text-rose-500 ">
                {card.Type}
              </span>
              -
              <span className="mx-2 font-semibold text-neutral-content">
                {card.Year}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

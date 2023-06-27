import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Details() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  // const param = useParams()
  const imdbData = useLoaderData();
  // console.log(imdbData);
  return (
    <>
      {/* Hero section */}
      <main className="bg-base-100">
        <section className="">
          <div
            className="hero  min-h-screen shadow-inset shadow-2xl bg-fixed"
            style={{
              background:
                "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://source.unsplash.com/random/1080x800/?movies-collections)",
              boxShadow: `inset black 0 0 ${
                matches ? "25rem 12rem" : "6rem 3rem"
              }`,
              backgroundAttachment: "fixed",
            }}
          >
            <div className="py-8 hero-content p-0 flex-col lg:flex-row">
              <img
                src={
                  imdbData.Poster == "N/A"
                    ? `https://source.unsplash.com/random/288x428/?${imdbData.Title}`
                    : imdbData.Poster
                }
                className="w-64 md:max-w-sm rounded-lg shadow-2xl"
              />
              <div className="mx-8 md:mx-16">
                <div className="flex flex-wrap justify-between items-center my-4">
                  <div className="my-4 font-bold">
                    <span className="uppercase mx-2 rounded-sm bg-red-400 px-3 py-2">
                      {imdbData.Type}
                    </span>
                    &mdash;
                    <span className="mx-2"> {imdbData.Year}</span>
                  </div>
                  <div className="mx-2">
                    <span className="text-white font-bold rounded-md bg-neutral-content bg-opacity-50 py-1 px-2">
                      {imdbData.Runtime}
                    </span>
                  </div>
                </div>
                <h1 className="md:text-5xl font-bold text-3xl">
                  {imdbData.Title}
                </h1>
                <p className="mx-2 md:mx-12 py-6 font-bold">{imdbData.Plot}</p>
                <a href="#more">
                  {" "}
                  <button className="hidden md:block mx-12 btn bg-red-400 text-white">
                    Learn More..
                  </button>
                </a>
              </div>
            </div>
            <div className="hidden md:grid absolute bottom-4">
              <span className="loading loading-ball loading-lg"></span>
            </div>
          </div>
        </section>
        {/* Table */}
        <section className="mx-4 md:mx-24 my-20 bg-base-100">
          <h1 id="more" className="my-8 text-3xl md:text-5xl">
            Info about&#32;
            <span className="text-red-300 underline">{imdbData.Title}</span>
          </h1>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover">
                  <th className="font-thin text-white">1.</th>
                  <td className="font-bold text-white">Actors</td>
                  <td className="">{imdbData.Actors}</td>
                </tr>
                <tr className="hover">
                  <th className="font-thin text-white">2.</th>
                  <td className="font-bold text-white">Awards</td>
                  <td>{imdbData.Awards}</td>
                </tr>
                <tr className="hover">
                  <th className="font-thin text-white">3.</th>
                  <td className="font-bold text-white">Box Office</td>
                  <td>{imdbData.BoxOffice}</td>
                </tr>
                <tr className="hover">
                  <th className="font-thin text-white">4.</th>
                  <td className="font-bold text-white">Country</td>
                  <td>{imdbData.Country}</td>
                </tr>
                <tr className="hover">
                  <th className="font-thin text-white">5.</th>
                  <td className="font-bold text-white">DVD</td>
                  <td>{imdbData.DVD}</td>
                </tr>
                <tr className="hover">
                  <th className="font-thin text-white">6.</th>
                  <td className="font-bold text-white">Director</td>
                  <td>{imdbData.Director}</td>
                </tr>
                <tr className="hover">
                  <th className="font-thin text-white">7.</th>
                  <td className="font-bold text-white">Genre</td>
                  <td>{imdbData.Genre}</td>
                </tr>
                <tr className="hover">
                  <th className="font-thin text-white">8.</th>
                  <td className="font-bold text-white">Language</td>
                  <td>{imdbData.Language}</td>
                </tr>
                <tr className="hover">
                  <th className="font-thin text-white">9.</th>
                  <td className="font-bold text-white">Metascore</td>
                  <td>{imdbData.Metascore}</td>
                </tr>
                <tr className="hover">
                  <th className="font-thin text-white">10.</th>
                  <td className="font-bold text-white">Production</td>
                  <td>{imdbData.Production}</td>
                </tr>
                <tr className="hover">
                  <th className="font-thin text-white">11.</th>
                  <td className="font-bold text-white">Rated</td>
                  <td>{imdbData.Rated}</td>
                </tr>
                <tr className="hover">
                  <th className="font-thin text-white">12.</th>
                  <td className="font-bold text-white">Ratings</td>
                  <td>{imdbData.Ratings[0]?.Value}</td>
                </tr>
                <tr className="hover">
                  <th className="font-thin text-white">13.</th>
                  <td className="font-bold text-white">Released</td>
                  <td>{imdbData.Released}</td>
                </tr>
                <tr className="hover">
                  <th className="font-thin text-white">14.</th>
                  <td className="font-bold text-white">Duration</td>
                  <td>{imdbData.Runtime}</td>
                </tr>
                <tr className="hover">
                  <th className="font-thin text-white">15.</th>
                  <td className="font-bold text-white">Writer</td>
                  <td>{imdbData.Writer}</td>
                </tr>
                <tr className="hover">
                  <th className="font-thin text-white">16.</th>
                  <td className="font-bold text-white">Year</td>
                  <td>{imdbData.Year}</td>
                </tr>
                <tr className="hover">
                  <th className="font-thin text-white">17.</th>
                  <td className="font-bold text-white">Imdb votes</td>
                  <td>{imdbData.imdbVotes}</td>
                </tr>
                <tr className="hover">
                  <th className="font-thin text-white">18.</th>
                  <td className="font-bold text-white">Total Seasons</td>
                  <td>{imdbData.totalSeasons}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}
export default Details;
/* 
{
    "Title": "Avengers of Justice: Farce Wars",
    "Year": "2018",
    "Rated": "N/A",
    "Released": "N/A",
    "Runtime": "87 min",
    "Genre": "Action, Comedy, Family",
    "Director": "Jarret Tarnol",
    "Writer": "Richard Dane Scott",
    "Actors": "Amy Smart, Shawn Michaels, Stephen Rannazzisi",
    "Plot": "While trying to remain a good husband and father, Superbat and the Avengers of Justice come out of retirement to stop Dark Jokester and Lisp Luthor from freezing the planet.",
    "Language": "English",
    "Country": "United States",
    "Awards": "N/A",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMWRkNTE4NjYtN2RhYi00ZjFhLTk5ZTgtYjk3ODZmZWM1NDMwXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "2.4/10"
        }
    ],
    "Metascore": "N/A",
    "imdbRating": "2.4",
    "imdbVotes": "639",
    "imdbID": "tt6172666",
    "Type": "movie",
    "DVD": "14 Jun 2019",
    "BoxOffice": "N/A",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
}
*/

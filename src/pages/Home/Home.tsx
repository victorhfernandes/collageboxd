import DonwloadHtml from "../../components/DonwloadHtml";
import MovieGroup from "../../components/MovieGroup/MovieGroup";
import PeriodOption from "../../components/PeriodOption";
import YearOption from "../../components/YearOption";
import "./Home.css";
import { FormEvent, useState, useRef } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const date = new Date();
  const [user, setUser] = useState(sessionStorage.getItem("user") || "");
  const [period, setPeriod] = useState(
    sessionStorage.getItem("period") || String(date.getMonth() + 1)
  );
  const [year, setYear] = useState(
    sessionStorage.getItem("year") || String(date.getFullYear())
  );
  const [hideRating, setHideRating] = useState(false);
  const [hideDuplicate, setHideDuplicate] = useState(false);
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const url = import.meta.env.VITE_API_URL;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault(); // prevent page refresh

    if (!user) {
      alert("User is empty");
    } else if (
      user === sessionStorage.getItem("user") &&
      period === sessionStorage.getItem("period") &&
      year === sessionStorage.getItem("year")
    ) {
      setLoading(true);
      setMovies([]);
      setTimeout(() => {
        setLoading(false);
        setMovies(JSON.parse(sessionStorage.getItem("movies") || "[]"));
      }, 250);
    } else {
      sessionStorage.setItem("user", user);
      sessionStorage.setItem("period", period);
      sessionStorage.setItem("year", year);
      setLoading(true);
      setMovies([]);

      try {
        const response = await fetch(
          `${url}/api/${user.trim()}&${period}&${year}`
        );
        const json = await response.json();
        setMovies(json);
        sessionStorage.setItem("movies", JSON.stringify(json));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="home-containner">
      <span className="title">Collageteste</span>
      <span className="subtitle">test page use for test</span>
      <form className="input-form" onSubmit={handleSubmit}>
        <div className="input-flex">
          <input
            className="input-user"
            type="text"
            placeholder="Letterboxd User"
            onChange={(event) => setUser(event.target.value)}
            value={user}
            autoComplete="on"
            name="username"
          />
          <select
            className="select-period"
            value={period}
            onChange={(event) => setPeriod(event.target.value)}
          >
            <PeriodOption year={year} />
          </select>
          <select
            className="select-period"
            value={year}
            onChange={(event) => setYear(event.target.value)}
          >
            <YearOption />
          </select>
        </div>
        <button disabled={isLoading} type="submit" className="button-submit">
          Submit
        </button>
      </form>
      <div className="input-hide-flex">
        <label className="label-hide">
          <input
            className="input-hide"
            type="checkbox"
            onChange={(event) => setHideRating(event.target.checked)}
          />
          Hide Rating
        </label>
        <label className="label-hide">
          <input
            className="input-hide"
            type="checkbox"
            onChange={(event) => setHideDuplicate(event.target.checked)}
          />
          Hide Duplicate
        </label>
      </div>
      {isLoading && <div className="loading"></div>}
      <div ref={divRef} className="download-div">
        <MovieGroup
          movies={movies}
          hideRating={hideRating}
          hideDuplicate={hideDuplicate}
        />
        {movies.length >= 1 && (
          <span className="collage-text">made with collageboxd.vercel.app</span>
        )}
      </div>
      {movies.length >= 1 && (
        <DonwloadHtml
          innerRef={divRef}
          user={user}
          period={period}
          year={year}
        />
      )}
      <Link className="small-screen" to="/about">
        &#9888;if you are on a small screen read this&#9888;
      </Link>
    </div>
  );
};

export default Home;

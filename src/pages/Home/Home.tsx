import DonwloadHtml from "../../components/DonwloadHtml";
import MovieGroup from "../../components/MovieGroup/MovieGroup";
import PeriodOption from "../../components/PeriodOption";
import YearOption from "../../components/YearOption";
import "./Home.css";
import { FormEvent, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { IS_SAFARI, month } from "../../utils";

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
  const [hideWatched, setHideWatched] = useState(false);
  const [design, setDesign] = useState(period === "0" ? "simple" : "calendar");
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const url = import.meta.env.VITE_API_URL;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault(); // prevent page refresh

    if (period === "0") {
      setDesign("simple");
    }

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
      <span className="title">Collageboxd</span>
      <span className="subtitle">Your Letterboxd collage generator</span>
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
        <span className="label-hide">Design: </span>
        <label className="label-hide">
          <input
            className="input-hide"
            type="radio"
            name="design"
            value="simple"
            checked={"simple" === design}
            onChange={(event) => setDesign(event.target.value)}
          />
          Simple
        </label>
        {sessionStorage.getItem("period") !== "0" && (
          <label className="label-hide">
            <input
              className="input-hide"
              type="radio"
              name="design"
              value="calendar"
              checked={"calendar" === design}
              onChange={(event) => setDesign(event.target.value)}
            />
            Calendar
          </label>
        )}
      </div>
      <div className="input-hide-flex">
        <span className="label-hide">Hide: </span>
        <label className="label-hide">
          <input
            className="input-hide"
            type="checkbox"
            onChange={(event) => setHideRating(event.target.checked)}
          />
          Rating
        </label>
        {design !== "calendar" && (
          <label className="label-hide">
            <input
              className="input-hide"
              type="checkbox"
              onChange={(event) => setHideDuplicate(event.target.checked)}
            />
            Duplicate
          </label>
        )}
        <label className="label-hide">
          <input
            className="input-hide"
            type="checkbox"
            onChange={(event) => setHideWatched(event.target.checked)}
          />
          Nº Watched
        </label>
      </div>

      {isLoading && <div className="loading"></div>}

      <div ref={divRef} className="download-div">
        <div
          className={
            design === "calendar" ? "calendar-header" : "films-watched-header"
          }
        >
          {design === "calendar" && movies.length >= 1 && (
            <span className="calendar-period">
              {month[Number(sessionStorage.getItem("period"))]
                .substring(0, 3)
                .toUpperCase()}
            </span>
          )}
          {!hideWatched && movies.length >= 1 && (
            <span className="films-watched">
              {movies.length} Films Watched{" "}
            </span>
          )}
          {design === "calendar" && movies.length >= 1 && (
            <span className="calendar-year">
              {sessionStorage.getItem("year")}
            </span>
          )}
        </div>

        <MovieGroup
          movies={movies}
          hideRating={hideRating}
          hideDuplicate={hideDuplicate}
          design={design}
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
      {IS_SAFARI && period === "0" && (
        <Link className="warning" to="/about">
          &#9888;All Year doesn't work on Safari&#9888;
        </Link>
      )}
    </div>
  );
};

export default Home;

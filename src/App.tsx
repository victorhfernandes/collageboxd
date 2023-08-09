import DonwloadHtml from "./components/DonwloadHtml";
import MovieGroup from "./components/MovieGroup/MovieGroup";
import PeriodOption from "./components/PeriodOption";
import YearOption from "./components/YearOption";
import Footer from "./components/Footer/Footer";
import Separator from "./components/Separator/Separator";
import "./App.css";
import { FormEvent, useState, useRef } from "react";

function App() {
  const date = new Date();
  const [user, setUser] = useState("");
  const [period, setPeriod] = useState(String(date.getMonth() + 1));
  const [year, setYear] = useState(String(date.getFullYear()));
  const [hideRating, setHideRating] = useState(false);
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const url = import.meta.env.VITE_URL;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault(); // prevent page refresh

    if (!user) {
      alert("User is empty");
    } else {
      setLoading(true);
      setMovies([]);

      try {
        const response = await fetch(
          `${url}/api/${user.trim()}&${period}&${year}`
        );
        const json = await response.json();
        setMovies(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <span className="title">Collageboxd</span>
      <span className="subtitle">Your Letterboxd collage generator</span>
      <Separator />
      <form className="input-form" onSubmit={handleSubmit}>
        <input
          className="input-user"
          type="text"
          placeholder="Letterboxd User"
          onChange={(event) => setUser(event.target.value)}
          value={user}
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
        <button type="submit" className="button-submit">
          Submit
        </button>
      </form>
      <label className="label-hide-rating">
        <input
          className="input-hide-rating"
          type="checkbox"
          onChange={(event) => setHideRating(event.target.checked)}
        />
        Hide Rating
      </label>
      {isLoading && <div className="loading"></div>}
      <div ref={divRef} className="download-div">
        <MovieGroup movies={movies} hideRating={hideRating} />
        {movies.length >= 1 && (
          <span className="collage-text">made with collageboxd.vercel.app</span>
        )}
      </div>
      {movies.length >= 1 && <DonwloadHtml innerRef={divRef} />}
      <Separator />
      <Footer />
    </>
  );
}

export default App;

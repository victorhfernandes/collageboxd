import DonwloadHtml from "./components/DonwloadHtml";
import MovieGroup from "./components/MovieGroup";
import PeriodOption from "./components/PeriodOption";
import YearOption from "./components/YearOption";
//import './App.css'
import "./Styles.css";
import { FormEvent, useState, useRef } from "react";

function App() {
  const date = new Date();
  const [user, setUser] = useState("");
  const [period, setPeriod] = useState(String(date.getMonth() + 1));
  const [year, setYear] = useState(String(date.getFullYear()));
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const url = "https://collageboxd-api.onrender.com";

  const handleSubmit = async (event: FormEvent) => {
    setLoading(true);
    setMovies([]);

    event.preventDefault(); // prevent page refresh

    try {
      const response = await fetch(`${url}/api/${user}&${period}&${year}`);
      const json = await response.json();
      setMovies(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
          <PeriodOption />
        </select>
        <select
          className="select-period"
          value={year}
          onChange={(event) => setYear(event.target.value)}
        >
          <YearOption />
        </select>
        {/*<input
          className="input-month"
          type="number"
          min="0"
          max="12"
          placeholder="Month"
          value={month}
          onChange={(event) => setMonth(event.target.value)}
  />*/}
        <button type="submit" className="button-submit">
          Submit
        </button>
      </form>
      {isLoading && <div className="loading"></div>}
      <div ref={divRef} className="grid-containner">
        <MovieGroup movies={movies} />
      </div>
      {movies.length >= 1 && <DonwloadHtml innerRef={divRef} />}
    </>
  );
}

export default App;

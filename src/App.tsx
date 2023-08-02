import DonwloadHtml from "./components/DonwloadHtml";
import MovieGroup from "./components/MovieGroup";
//import './App.css'
import "./Styles.css";
import { FormEvent, useState, useRef } from "react";

function App() {
  const [user, setUser] = useState("");
  const [month, setMonth] = useState("");
  const [movies, setMovies] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const url = "https://collageboxd-api.onrender.com";

  const handleSubmit = async (event: FormEvent) => {
    setLoading(true);
    setMovies([]);

    event.preventDefault(); // prevent page refresh

    try {
      const response = await fetch(`${url}/api/${user}/${month}`);
      const json = await response.json();
      setMovies(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }

    setUser("");
    setMonth("");
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
        <input
          className="input-month"
          type="number"
          min="0"
          max="12"
          placeholder="Month"
          value={month}
          onChange={(event) => setMonth(event.target.value)}
        />
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

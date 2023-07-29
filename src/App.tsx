import MovieGroup from "./components/MovieGroup";
//import './App.css'
import "./Styles.css";
import { FormEvent, useCallback, useRef, useState } from "react";
import { toPng } from "html-to-image";

/*const movies = [
  {
    movieName: "John Wick: Chapter 4",
    movieRating: " ★★★★★ ",
    isLiked: 1,
    moviePoster: "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
  },
  {
    movieName: "Little Women",
    movieRating: " ★★★★ ",
    isLiked: 0,
    moviePoster: "/yn5ihODtZ7ofn8pDYfxCmxh8AXI.jpg",
  },
  {
    movieName: "Pride & Prejudice",
    movieRating: " ★★★★ ",
    isLiked: 1,
    moviePoster: "/sGjIvtVvTlWnia2zfJfHz81pZ9Q.jpg",
  },
  {
    movieName: "Blow Up My Town",
    movieRating: " ★★★ ",
    isLiked: 0,
    moviePoster: "/cky7DIVzjZab5O05JmlM33OvEYQ.jpg",
  },
  {
    movieName: "Je, Tu, Il, Elle",
    movieRating: " ★★★★ ",
    isLiked: 1,
    moviePoster: "/4arnTs41WSLWsnENWdljFKo0pu1.jpg",
  },
];*/

function App() {
  const ref = useRef<HTMLDivElement>(null);
  const [user, setUser] = useState("");
  const [month, setMonth] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault(); // 👈️ prevent page refresh
    console.log("oi");

    try {
      console.log("oii");
      const response = await fetch(
        `https://collageboxd-api.onrender.com/api/${user}/${month}`
      );
      const json = await response.json();
      setMovies(json);
      console.log("oiii");
    } catch (error) {
      console.error(error);
    }

    // 👇️ clear all input values in the form
    setUser("");
    setMonth("");
  };

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <>
      <form onSubmit={handleSubmit}>
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
          min="1"
          max="12"
          placeholder="Month"
          onChange={(event) => setMonth(event.target.value)}
          value={month}
        />
        <button type="submit" className="button-submit">
          Submit
        </button>
      </form>
      <div ref={ref} className="flex-containner">
        <MovieGroup movies={movies} />
      </div>
      <button onClick={onButtonClick}>Download</button>
    </>
  );
}

export default App;

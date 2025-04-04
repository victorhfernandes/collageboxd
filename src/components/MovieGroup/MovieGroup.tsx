import Rating from "../Rating/Rating";
import { IS_SAFARI } from "../../utils";
import "./MovieGroup.css";
import { useState } from "react";

interface Props {
  movies: Movie[];
  hideRating: boolean;
  hideDuplicate: boolean;
  design: string;
}

type Movie = {
  day: string;
  movieName: string;
  movieRating: number;
  isLiked: number;
  isHalf: boolean;
  moviePoster: string;
  error: string;
};

function MovieGroup({ movies, hideRating, hideDuplicate, design }: Props) {
  function uniqByKeepLast(data: Movie[], key: any) {
    return [...new Map(data.map((x) => [key(x), x])).values()];
  }
  if (hideDuplicate) {
    movies = uniqByKeepLast(movies, (it: Movie) => it.movieName);
  }

  function gridNumber(length: number, design: string) {
    let grid = "";
    if (length === 1) {
      grid = "grid-containner-1";
    } else if (length >= 50) {
      grid = "grid-containner-10";
    } else {
      grid = "grid-containner";
    }
    if (design === "simple") {
      if (length >= 50) {
        grid += " grid-gap-10";
      } else {
        grid += " grid-gap";
      }
    }

    return grid;
  }

  function flexMovie(length: number) {
    let flex = "";
    if (length === 1) {
      flex = "flex-movie-1";
    } else {
      flex = "flex-movie";
    }

    if (design === "calendar") {
      if (IS_SAFARI) {
        flex += " flex-movie-border-safari";
      } else {
        flex += " flex-movie-border";
      }
    }
    return flex;
  }

  function addSafari(tag: string) {
    if (IS_SAFARI && design === "calendar") {
      tag += "-safari";
    }
    return tag;
  }

  return (
    <>
      <div className={gridNumber(movies.length, design)}>
        {movies.map((item, index) => {
          const [i, setI] = useState(0);

          function incrementI(arrayLength: number) {
            setI((prevI) => (prevI + 1) % arrayLength);
          }

          return (
            <div key={index}>
              {item.error ? (
                <div className="error">{item.error}</div>
              ) : (
                <div className={flexMovie(movies.length)}>
                  {design === "calendar" && (
                    <span className="calendar-number">{item.day}</span>
                  )}
                  {item.moviePoster ? (
                    <img
                      alt={item.movieName}
                      className={addSafari("moviePoster")}
                      src={`https://image.tmdb.org/t/p/w500${item.moviePoster[i]}`}
                      onClick={() => incrementI(item.moviePoster.length)}
                    />
                  ) : (
                    <div className={addSafari("no-poster")}>
                      <span
                        className={
                          movies.length >= 50
                            ? "no-poster-text-small"
                            : "no-poster-text"
                        }
                      >
                        {item.movieName}
                      </span>
                    </div>
                  )}
                  <div
                    className={
                      !hideRating
                        ? addSafari("grid-rating")
                        : addSafari("grid-no-rating")
                    }
                  >
                    <Rating
                      contStars={hideRating ? 0 : item.movieRating}
                      isHalf={hideRating ? false : item.isHalf}
                      isLiked={hideRating ? 0 : item.isLiked}
                      movieName={item.movieName}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MovieGroup;

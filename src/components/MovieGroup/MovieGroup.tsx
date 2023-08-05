import Rating from "../Rating/Rating";
import "./MovieGroup.css";

interface Props {
  movies: Movie[];
  hideRating: boolean;
}

type Movie = {
  movieName: string;
  movieRating: number;
  isLiked: number;
  isHalf: boolean;
  moviePoster: string;
  error: string;
};

function MovieGroup({ movies, hideRating }: Props) {
  return (
    <>
      {movies.map((item, index) => (
        <div key={index} className="flex-movie">
          {item.error ? (
            <div className="error">{item.error}</div>
          ) : (
            <>
              {item.moviePoster ? (
                <img
                  alt={item.movieName}
                  className="moviePoster"
                  src={`https://image.tmdb.org/t/p/w500${item.moviePoster}`}
                />
              ) : (
                <div className="no-poster">
                  <span className="no-poster-text">{item.movieName}</span>
                </div>
              )}
              <div className={!hideRating ? "grid-rating" : "grid-no-rating"}>
                <Rating
                  contStars={hideRating ? 0 : item.movieRating}
                  isHalf={hideRating ? false : item.isHalf}
                  isLiked={hideRating ? 0 : item.isLiked}
                  movieName={item.movieName}
                />
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
}

export default MovieGroup;

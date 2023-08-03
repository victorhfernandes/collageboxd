import heart from "../assets/heart.png";
import half from "../assets/half.png";
import Stars from "./Stars";

interface Props {
  movies: Movie[];
}

type Movie = {
  movieName: string;
  movieRating: number;
  isLiked: number;
  isHalf: boolean;
  moviePoster: string;
  error: string;
};

function MovieGroup({ movies }: Props) {
  return (
    <>
      {movies.map((item, index) => (
        <div key={index} className="flex-movie">
          {item.error ? (
            <div className="error">{item.error}</div>
          ) : (
            <>
              <img
                alt={item.movieName}
                className="moviePoster"
                src={`https://image.tmdb.org/t/p/w500${item.moviePoster}`}
              />
              <div className="grid-rating">
                <Stars contStars={item.movieRating} />
                {item.isHalf ? <img className="rating-icon" src={half} /> : ""}
                {item.isLiked ? (
                  <img
                    className={
                      item.movieName === "Barbie"
                        ? "heart-icon barbie-heart"
                        : "heart-icon"
                    }
                    src={heart}
                  />
                ) : (
                  ""
                )}
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
}

export default MovieGroup;

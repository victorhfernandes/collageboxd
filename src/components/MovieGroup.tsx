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
          <img
            className="moviePoster"
            src={`https://image.tmdb.org/t/p/original/${item.moviePoster}`}
          />
          <div>
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
        </div>
      ))}
    </>
  );
}

export default MovieGroup;

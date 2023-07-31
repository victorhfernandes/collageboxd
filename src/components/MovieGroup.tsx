//import star from "../assets/star.png";
import heart from "../assets/heart.png";
//import half from "../assets/half.png";

interface Props {
  movies: Movie[];
}

type Movie = {
  movieName: string;
  movieRating: string;
  isLiked: number;
  moviePoster: string;
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
          <p className="rating">
            {item.movieRating}{" "}
            {item.isLiked ? <img className="heart-icon" src={heart} /> : ""}
          </p>
        </div>
      ))}
    </>
  );
}

export default MovieGroup;

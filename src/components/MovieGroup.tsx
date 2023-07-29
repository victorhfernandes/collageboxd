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
        <div key={index}>
          <img
            className="moviePoster"
            src={`https://image.tmdb.org/t/p/original/${item.moviePoster}`}
          />
          <p className="rating">
            {item.movieRating} {item.isLiked ? `❤` : ""}
          </p>
        </div>
      ))}
    </>
  );
}

export default MovieGroup;

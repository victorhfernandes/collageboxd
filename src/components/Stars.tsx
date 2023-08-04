//I know this is a poor way to do this but keeping the images separate was causing a bug on small screens that I couldn't resolve, I'm searching for better ways

import nada from "../assets/nada.png";
import rating1 from "../assets/rating-1.png";
import rating2 from "../assets/rating-2.png";
import rating3 from "../assets/rating-3.png";
import rating4 from "../assets/rating-4.png";
import rating5 from "../assets/rating-5.png";
import rating6 from "../assets/rating-6.png";
import rating7 from "../assets/rating-7.png";
import rating8 from "../assets/rating-8.png";
import rating9 from "../assets/rating-9.png";
import rating10 from "../assets/rating-10.png";

const arrayRating: string[] = [];
arrayRating[1] = rating1;
arrayRating[2] = rating2;
arrayRating[3] = rating3;
arrayRating[4] = rating4;
arrayRating[5] = rating5;
arrayRating[6] = rating6;
arrayRating[7] = rating7;
arrayRating[8] = rating8;
arrayRating[9] = rating9;
arrayRating[10] = rating10;

interface Props {
  contStars: number;
  isHalf: boolean;
}

const Stars = ({ contStars, isHalf }: Props) => {
  contStars *= 2;
  isHalf && contStars++;
  const rating = arrayRating[contStars];

  return <img className="rating-icon" src={contStars ? rating : nada} />;
};
export default Stars;

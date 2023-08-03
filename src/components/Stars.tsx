import star from "../assets/star.png";
import nada from "../assets/nada.png";

interface Props {
  contStars: number;
}

const Stars = ({ contStars }: Props) => {
  const stars: string[] = [];
  for (let i = 0; i < contStars; i++) {
    stars.push("rating-icon");
  }
  if (!contStars) {
    for (let i = 0; i < 5; i++) {
      stars.push("rating-icon");
    }
  }

  return stars.map((item, index) => (
    <img key={index} className={item} src={contStars ? star : nada} />
  ));
};

export default Stars;

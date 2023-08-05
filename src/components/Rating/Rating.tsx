import star from "../../assets/star.png";
import nada from "../../assets/nada.png";
import heart from "../../assets/heart.png";
import half from "../../assets/half.png";
import "./Rating.css";

interface Props {
  contStars: number;
  isHalf: boolean;
  isLiked: number;
  movieName: string;
}

const Stars = ({ contStars, isHalf, isLiked, movieName }: Props) => {
  const stars: string[] = [];
  let i: number;

  function pickImage(img: string) {
    const splitImg = img.split("-");
    if (splitImg[0] === "star") {
      return star;
    } else if (splitImg[0] === "half") {
      return half;
    } else if (splitImg[0] === "heart") {
      return heart;
    } else {
      return nada;
    }
  }

  if (!contStars && !isLiked && !isHalf) {
    for (i = 0; i < 5; i++) {
      stars.push("nada-icon");
    }
  }

  for (i = 0; i < contStars; i++) {
    stars.push(`star-icon`);
  }

  if (isHalf) {
    stars.push(`half-icon`);
    i++;
  }
  if (isLiked) {
    const isAlone = i === 0 ? "" : "heart-left";

    if (movieName === "Barbie") {
      stars.push(`heart-icon ${isAlone} barbie-heart`);
    } else {
      stars.push(`heart-icon ${isAlone}`);
    }
    i++;
  }

  return stars.map((item, index) => (
    <img key={index} className={item} src={pickImage(item)} />
  ));
};

export default Stars;

import star from "../assets/star.png";

interface Props {
  contStars: number;
}

const Stars = ({ contStars }: Props) => {
  const stars: string[] = [];
  for (let i = 0; i < contStars; i++) {
    stars.push("rating-icon");
  }

  return stars.map((item, index) => (
    <img key={index} className={item} src={star} />
  ));
};

export default Stars;

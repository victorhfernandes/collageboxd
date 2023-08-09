import "./Anchor.css";

interface Props {
  href: string;
  name: string;
}

const A = ({ href, name }: Props) => {
  return (
    <a className="anchor" href={href} target="_blank">
      {name}
    </a>
  );
};

export default A;

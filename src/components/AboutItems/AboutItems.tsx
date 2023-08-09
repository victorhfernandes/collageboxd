import { ReactNode } from "react";
import "./AboutItems.css";

interface Props {
  title: string;
  children: ReactNode;
}

const AboutItems = ({ title, children }: Props) => {
  return (
    <div className="about-items">
      <span className="about-title">{title}</span>
      <span className="about-text">{children}</span>
    </div>
  );
};

export default AboutItems;

import { ReactNode } from "react";
import "./InfoItems.css";

interface Props {
  title: string;
  children: ReactNode;
}

function InfoItems({ title, children }: Props) {
  return (
    <div className="info-items">
      <span className="info-title">{title}</span>
      <span className="info-text">{children}</span>
    </div>
  );
}

export default InfoItems;

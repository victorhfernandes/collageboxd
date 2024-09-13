import { ReactNode } from "react";
import "./Anchor.css";

interface Props {
  href: string;
  children: ReactNode;
}

function A({ href, children }: Props) {
  return (
    <a className="anchor" href={href} target="_blank">
      {children}
    </a>
  );
}

export default A;

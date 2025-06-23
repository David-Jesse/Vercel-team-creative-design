import type { ReactNode } from "react";

const Button = ({ children, link }: { children: ReactNode; link?: string }) => {
  return (
    <a href={link} className="btn">
      {children}
    </a>
  );
};

export default Button;

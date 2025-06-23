import { useEffect, useRef, type ReactNode } from "react";
import { useAnimate, useInView } from "motion/react";
import "./SlidingText.css";

interface SlidingTextProps {
  children: ReactNode;
}

const SlidingText = ({ children }: SlidingTextProps) => {
  const [scoped, animate] = useAnimate();
  const textRef = useRef(null);
  const isInView = useInView(scoped);

  useEffect(() => {
    if (textRef.current) {
      if (isInView) {
        animate(
          textRef.current,
          { x: ["0", "-100%"] },
          { duration: 1300, ease: "linear", repeat: Infinity }
        );
      } else {
        animate(textRef.current, { x: "0%" });
      }
    }
  }, [isInView, animate]);

  return (
    <div className="sliding-text-container" ref={scoped}>
      <div className="slider" ref={textRef}>
        <span className="sliding-text">{children}</span>
        <span className="sliding-text">{children}</span>
      </div>
    </div>
  );
};

export default SlidingText;

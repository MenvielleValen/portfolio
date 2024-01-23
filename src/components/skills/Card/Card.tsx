import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import "./Card.css";

export const Card = ({ children, ...props }: PropsWithChildren<any>) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const card = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: any) => {
    if(!card.current) return;
    const m = {
      x: e.clientX - card.current.getBoundingClientRect().left,
      y: e.clientY - card.current.getBoundingClientRect().top,
    };
    setMousePosition(m);
  };

  return (
    <div
      ref={card}
      className="card"
      {...props}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <div
          className="pointer-card"
          style={{
            position: "absolute",
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        ></div>
      )}
    </div>
  );
};

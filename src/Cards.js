import React, { useState } from "react";

function Card({ name, image }) {
  const [{ angle, XPos, yPos }] = useState({
    angle: Math.random() * 90 - 45,
    xPos: Math.random() * 40 - 20,
    yPos: Math.random() * 40 - 20,
  });

  const transform = `translate(${xPos}px, ${yPos}) rotate(${angle}deg)`;

  return <img className="Card" alt={name} src={image} style={{ transform }} />;
}

export default Card;

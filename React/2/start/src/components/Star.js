import React from "react";
import "../styles/star.css";

export default function Star(props) {
  return (
    <div className="crop" style={{ width: props.rating ?  (90/5)*props.rating : 0 }}
    title={props.rating}
    onClick = {() => props.onClicked(props.rating)}
    >
      <div className="stars">
        <span className="fa-solid fa-star"></span>
        <span className="fa-solid fa-star"></span>
        <span className="fa-solid fa-star"></span>
        <span className="fa-solid fa-star"></span>
        <span className="fa-solid fa-star"></span>
      </div>
    </div>
  );
}

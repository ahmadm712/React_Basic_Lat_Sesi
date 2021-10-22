import React from "react";
import PropsTypes from "prop-types";

export default function Card(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.date}</p>
      <p>{props.text}</p>
      <p>{Math.round(props.value * 3) / 2}%</p>
    </div>
  );
}

Card.PropsTypes = {
  title: PropsTypes.string,
  value: PropsTypes.number,
  date: PropsTypes.number.isRequired,
};

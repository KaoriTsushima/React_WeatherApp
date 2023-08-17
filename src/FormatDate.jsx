import React from "react";
import "./FormatDate.css";

export default function Date(props) {
  const options = {
    year: "numeric",
    month: "short",
    weekday: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };
  return (
    <div className="FormatDate">
      {new Intl.DateTimeFormat("en-GB", options).format(props.date)}
    </div>
  );
}

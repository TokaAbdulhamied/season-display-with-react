import "./season.css";
import React from "react";
const seasonsConfig = {
  summer: {
    header: "let's hit the beatch ",
    iconName: "sun",
  },
  winter: {
    header: "it's freeezing",
    iconName: "snowflake",
  },
};
const seasonIs = (lat, month) => {
  if (month > 2 && month < 9) return lat > 0 ? "summer" : "winter";
  else return lat > 0 ? "winter" : "summer";
};
const Season = (props) => {
  const season = seasonIs(props.lat, new Date().getMonth());
  const { header, iconName } = seasonsConfig[season];
  return (
    <div className={`season ${season}`}>
      <i className={`left massive ${iconName} icon`}></i>
      <h1>{header} </h1>
      <i className={`right massive ${iconName} icon`}></i>
    </div>
  );
};

export default Season;

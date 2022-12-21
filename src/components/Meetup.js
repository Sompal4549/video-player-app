import React from "react";
import classes from "./Meetup.module.css";
const Meetup = (props) => {
  return (
    <>
      <div className={classes.Meetup}>
        <img
          className={classes.img}
          src={props.img}
          alt={props.title}
          height="100"
          width="100"
        />
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
};

export default Meetup;

import React, { useState } from "react";
import classes from "./Meetup.module.css";
import Modal from "./UI/modal/Modal";
import Backdrop from "./UI/backdrop/Backdrop";
const Meetup = (props) => {
  const [modal, setModal] = useState(false);
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
        <div className={classes.buttonBox}>
          <button
            className={classes.submit}
            onClick={(e) => console.log(props.title)}
          >
            Submit
          </button>
          <button className={classes.delete} onClick={() => setModal(true)}>
            Delete
          </button>
        </div>
      </div>
      {modal && (
        <Modal
          onCancel={() => setModal(false)}
          onClick={() => setModal(false)}
        />
      )}
      {modal && <Backdrop onClick={() => setModal(false)} />}
    </>
  );
};

export default Meetup;

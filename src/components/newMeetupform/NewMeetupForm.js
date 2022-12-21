import React, { useRef, useState } from "react";
import classes from "./NewMeetupForm.module.css";
const NewMeetupForm = () => {
  const [data, setData] = useState({});
  const titleRef = useRef("");
  const imageRef = useRef("");
  const addressRef = useRef("");
  const descriptionRef = useRef("");
  const submitHandler = (event) => {
    event.preventDefault();
    const title = titleRef.current.value;
    const image = imageRef.current.value;
    const address = addressRef.current.value;
    const description = descriptionRef.current.value;
    const meetupData = {
      title: title,
      image: image,
      address: address,
      description: description,
    };
    setData(meetupData);
    console.log(meetupData);
  };
  return (
    <>
      <div className={classes.card}>
        <form onSubmit={submitHandler} className={classes.form}>
          <div>
            <label className={classes.label} htmlFor="title">
              Meetup Title
            </label>
            <input
              className={classes.input}
              placeholder="Meetup Title"
              name="title"
              id="title"
              type="text"
              ref={titleRef}
            />
          </div>
          <div>
            <label className={classes.label} htmlFor="Image">
              Meetup Image
            </label>
            <input
              className={classes.input}
              placeholder="Meetup Image"
              name="Image"
              id="Image"
              type="text"
              ref={imageRef}
            />
          </div>
          <div>
            <label className={classes.label} htmlFor="address">
              Meetup Address
            </label>
            <input
              className={classes.input}
              placeholder="Meetup Address"
              name="address"
              id="address"
              type="address"
              ref={addressRef}
            />
          </div>
          <div>
            <label className={classes.label} htmlFor="description">
              Meetup Description
            </label>
            <textarea
              className={classes.input}
              placeholder="Meetup description"
              name="description"
              id="description"
              ref={descriptionRef}
              type="description"
              cols={5}
            ></textarea>
          </div>
          <button type="submit" className={classes.submit}>
            Click To Submit Details
          </button>
        </form>
        <div>
          <p>Your data is here!</p>
          <p>{data.title}</p>
          <p>{data.address}</p>
          <p>{data.description}</p>
          <p>{data.image}</p>
        </div>
      </div>
    </>
  );
};

export default NewMeetupForm;

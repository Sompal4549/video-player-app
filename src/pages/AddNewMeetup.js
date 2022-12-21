import NewMeetupForm from "../components/newMeetupform/NewMeetupForm";

function AddNewMeetup() {
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Add New Meetup</h1>
        <p
          style={{
            maxWidth: "500px",
            height: "auto",
            margin: "auto",
            textAlign: "center",
          }}
        >
          Add Details to Add your meetup public. Kindly fill the form to add
          your meetup.
        </p>
        <NewMeetupForm />
      </div>
    </>
  );
}
export default AddNewMeetup;

import classes from "./Modal.module.css";
function Modal(props) {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.modal}>
          <p className={classes.close} onClick={props.onCancel}>
            close
          </p>
          <h3 className={classes.heading}>Are you sure?</h3>
          <p className={classes.para}>
            Are you sure sure? You want to delete this meetup item.
          </p>
          <div className={classes.buttonBox}>
            <button className={classes.delete} onClick={props.onClick}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Modal;

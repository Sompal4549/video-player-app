import classes from "./Modal.module.css";
function Modal(props) {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.modal}>
          <h3 className={classes.heading}>Are you sure, want to delete</h3>
          <span className={classes.close} onClick={props.onCancel}>
            close
          </span>
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

import { Fragment } from "react";
import Card from "../UI/Card";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <Fragment>
      <div className={classes.backdrop} onClick={props.onClose} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.text}</p>
        </div>
        <div>
          <footer className={classes.actions}>
            <button onClick={props.onClose} className={classes.button}>
              Okay
            </button>
          </footer>
        </div>
      </Card>
    </Fragment>
  );
};

export default ErrorModal;

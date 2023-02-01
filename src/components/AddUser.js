import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import { Fragment, useRef, useState, useContext } from "react";
import ErrorModal from "./ErrorModal";
import UserContext from "./user-context";

const AddUser = (props) => {
  const ctx = useContext(UserContext);

  const enteredInputName = useRef();
  const enteredInputAge = useRef();
  const [error, setError] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredName = enteredInputName.current.value;
    const enteredAge = enteredInputAge.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input!",
        text: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        text: "PLease ented a valid age (> 0).",
      });
      return;
    }

    ctx.onAddUser(enteredName, enteredAge);

    enteredInputName.current.value = "";
    enteredInputAge.current.value = "";
  };
  const closeModalHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          onClose={closeModalHandler}
          title={error.title}
          text={error.text}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input ref={enteredInputName} type="text"></input>
          <label htmlFor="age">Age (Years)</label>
          <input ref={enteredInputAge} type="number"></input>
          <button type="submit" className={classes.button}>
            Add User
          </button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;

import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState(null);

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => setEnteredAge(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();

    //empty field validation
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "INVALID INPUT",
        message: `Please don't leave the fields blank`,
      });
      return;
    }
    //invalid age validation

    if (+enteredAge < 0) {
      setError({ title: "INVALID AGE", message: `Please enter a valid age` });
      return;
    }

    console.log(error, enteredAge, enteredUserName);
    // const userData = {
    //   id: Math.random().toString(),
    //   userName: enteredUserName,
    //   age: enteredAge,
    // };

    // props.onAddUser(userData);
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Card className={classes.input}>
      {error && (
        <ErrorModal
          title={error["title"]}
          message={error["message"]}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={submitHandler}>
        <label htmlFor="username">UserName</label>
        <input
          id="username"
          type="text"
          value={enteredUserName}
          onChange={usernameChangeHandler}
          placeholder="Enter your Name"
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          max={150}
          value={enteredAge}
          onChange={ageChangeHandler}
          placeholder="Enter Your Age"
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;

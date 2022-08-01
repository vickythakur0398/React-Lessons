import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [enteredUsername, setenteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
    {return;}
    if(+enteredAge<1)
    {
        return <ErrorModal></ErrorModal>
    }
    // console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge("");
    setenteredUsername("");
  };

  const usernameChangeHandler = (event) => {
    setenteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    
      setEnteredAge(event.target.value);
    
  };

  return (
    <div>
    <div>
    <ErrorModal title ="world is cool" message = "you are doing great"></ErrorModal>
    </div>
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          value={enteredUsername}
          id="username"
          type="text"
          onChange={usernameChangeHandler}
        ></input>

        <label htmlFor="age">Age (years)</label>
        <input
          value={enteredAge}
          id="age"
          type="number"
          onChange={ageChangeHandler}
        ></input>

        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;

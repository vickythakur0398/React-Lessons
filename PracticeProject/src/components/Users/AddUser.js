import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../UI/Wrapper";
const AddUser = (props) => {
 

  const [error, setError] = useState();

  //using ref isntaed of state
//now after this i will add ref prop to the element i want to get value
  const inputNameRef = useRef();
  const inputAgeRef = useRef();


  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = inputNameRef.current.value;
    const enteredAge = inputAgeRef.current.value;
    console.log(inputNameRef.current.value)
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Put valid name and age",
        message: "please put valid values tada",
      });

      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Put valid ge",
        message: "please put valid values agaee",
      });

      return;
    }
    // console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredUsername, enteredAge);
    // here i am resetting value usimg dom but dont manipulate dom rarely do that
    inputNameRef.current.value ='';
    inputAgeRef.current.value ='';
    
  };

  
  //for button in errror modal
  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      <div>
        {error && (
          <ErrorModal
            title={error.title}
            message={error.message}
            onConfirm={errorHandler}
          ></ErrorModal>
        )}
      </div>
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            
            id="username"
            type="text"
           
            ref ={inputNameRef}
          ></input>

          <label htmlFor="age">Age (years)</label>
          <input
           
            id="age"
            type="number"
           
            ref = {inputAgeRef}
          ></input>

          <Button type="submit">Add User</Button>
        </form>
      </Card>
      </Wrapper>
  );
};

export default AddUser;

import React, { useState } from 'react';
import Card from '../UI/Card';
import styles from './AddUser.module.css'
import Button from '../UI/Button';
const AddUser = (props) =>
{
    const [enterdUsername, setenteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler =(event) =>
    {
        event.preventDefault();
        console.log(enterdUsername, enteredAge);
        setEnteredAge('');
        setenteredUsername('')
    }
    
    const usernameChangeHandler = (event) =>
    { 
        setenteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) =>
    { 
        if(event.target.value <= 0)
        { 
            return }
        else{
        setEnteredAge(event.target.value);
        }
    }


    return(
    <Card className= {styles.input}>
    <form onSubmit={addUserHandler}>
    <label htmlFor="username">Username</label>
    <input id = "username" type="text" onChange={usernameChangeHandler} ></input>

    <label htmlFor="age">Age (years)</label>
    <input id = "age" type="number" onChange={ageChangeHandler} ></input>

    <Button type ="submit">Add User</Button>
    </form>
    </Card>
    );
}


export default AddUser;
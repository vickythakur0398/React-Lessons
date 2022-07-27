import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitile, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const eventHandler = (event) => {
    setEnteredTitle(event.target.value);

    // console.log(event) it contains the all the events and isnide target > value it is capturing the value
    // let val = event.target.value;
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    console.log(setEnteredAmount(event.target.value));
    // console.log("hi chjecl");
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) =>
  {
      event.preventDefault();

      const expenseData = {
        title: enteredTitile,
        amount : enteredAmount,
        date : new Date(enteredDate),
      };

      console.log(expenseData)
  }

  return (
    <form onSubmit= {submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={eventHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"  onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
           
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2024-31-12"
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

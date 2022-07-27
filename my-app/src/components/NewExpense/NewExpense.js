import React from "react";

import './NewExpense.css';
import './ExpenseForm'
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {

    const SaveExpenseDataHandler = (enteredExpenseData) =>
    {
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        // props.addExpenseHandler
        console.log(expenseData);
    }

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData = {SaveExpenseDataHandler}/>
    </div>
    
  
};

export default NewExpense;

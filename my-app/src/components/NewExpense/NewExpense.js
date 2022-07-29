
import React, {useState} from 'react';

import './NewExpense.css';
import './ExpenseForm'
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);


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

    const startEditingHandler = ()=>
    {
        setIsEditing(true)
    }
    return <div className="new-expense">
    {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
       {isEditing && <ExpenseForm onSaveExpenseData = {SaveExpenseDataHandler}/>}
    </div>
    
  
};

export default NewExpense;

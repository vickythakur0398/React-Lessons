import react, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

// import ExpenseItem from "./components/ExpenseItem";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Udemy course",
    amount: 499,
    date: new Date(2022, 7, 23),
  },
  {
    id: "e2",
    title: "KeyBoard & Mouse",
    amount: 799,
    date: new Date(2022, 7, 24),
  },
  {
    id: "e3",
    title: "Sony Liv",
    amount: 1,
    date: new Date(2022, 7, 22),
  },
];

const App =() => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {

    setExpenses((prevExpenses) =>
    {
      return [expense, ...prevExpenses]
    })
    
   
  };

  

  return (
    

    <div>
    
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

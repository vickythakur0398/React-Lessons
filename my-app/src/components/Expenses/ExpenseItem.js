
import React, {useState} from 'react';
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

 

function ExpenseItem(props) 
  {
    
    const [title, setTitle] = useState(props.title);
    const clickHandler = () =>
    {
      // using useState to update
      // title = 'updated';
     // setTitle('updated')
      //console.log(title)
    }
  return (
    <li>
    <Card className="expense-item">
     
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">{props.amount}</div>
      {/*47 here we are adding button 
      <button onClick= {clickHandler}>update title</button>*/}
    
    </Card>
    </li>
  );
}
export default ExpenseItem;

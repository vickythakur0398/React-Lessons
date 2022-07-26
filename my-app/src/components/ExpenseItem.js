//s1 here i have created a function i.e a component and it is a practice to sraert with Caps
// bcs when we will import it into main js than we can make it tags like <h1></h1> simmilarly like <ExpenseItem>
// </ExpenseItem> so page will know it is not html tags as it is not starting with small case

//2 now i am importing css style sheet which i have copied

import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
{
  /*function ExpenseItem() {
  //   return <h2>Expense Item</h2>;

  //here in retuirn statement we can only have one root elements so what if we have to add 3 more things
  // return  <div>Amount</div>Title<div></div>Expense<div></div> so we will wrap it under one div i.e rot elements for now

  //36 for getting values dynamically although i am hardcoding it for now

  // const expensDate = new Date(2022, 7, 26);
  // const expenseTitle = "Udemy Course";
  // const expenseAmount = 499; // I will now use these values in html i.e jsx

  // 37 I am using the props

  return (
    <div className="expense-item">
      {/*here since it looks like html but it is jsx and class is already reserved so to add css style we 
    will use className*/
}
{
  /*

    // 36 as we were hardcoding the values now we want that it should come dynamically so we will use js 
    <div>July 25 2022 </div>
      <div  className= "expense-item__description">
        <h2>Udemy Course</h2>
      </div>
      <div className="expense-item__price">499</div>
  */
}
{
  /*
      <div>{expensDate.toISOString()}</div>
      {/* 36- It is a build in object available on all date objects
      here date will be converted into someformat of date else 
      it will throw an error if we try to simply try to print date we can also use name.ToString 
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
      </div>
      <div className="expense-item__price"> Rs {expenseAmount} ./.</div>
    </div>
  );
}
*/
}

// here 37- I am using props

function ExpenseItem(props) {
  {
    /*
  39 what i am doin now is that I am creating a =nother date component which will do the same thing so i am 
  so i am commenting that date div
  const month = props.date.toLocaleString('en-US', {month: 'long'})
  const day = props.date.toLocaleString('en-US', {day: '2-digit'})
  const year = props.date.getFullYear();
*/
  }
  return (
    <Card className="expense-item">
      {/* <div>{props.date.toISOString()} </div> setting date in a good presentable way 38*/}
      {/* 39 <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
      </div>
  */}
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">{props.amount}</div>
    </Card>
  );
}
export default ExpenseItem;

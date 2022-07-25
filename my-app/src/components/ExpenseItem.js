//s1 here i have created a function i.e a component and it is a practice to sraert with Caps
// bcs when we will import it into main js than we can make it tags like <h1></h1> simmilarly like <ExpenseItem>
// </ExpenseItem> so page will know it is not html tags as it is not starting with small case


//2 now i am importing css style sheet which i have copied 

import './ExpenseItem.css'
function ExpenseItem() {
  //   return <h2>Expense Item</h2>;

  //here in retuirn statement we can only have one root elements so what if we have to add 3 more things
  // return  <div>Amount</div>Title<div></div>Expense<div></div> so we will wrap it under one div i.e rot elements for now
  return (
    <div className="expense-item">

    {/*here since it looks like html but it is jsx and class is already reserved so to add css style we will use className*/}
      <div className= "expense-item">July 25 2022 </div>
      <div  className= "expense-item__description">
        <h2>Udemy Course</h2>
      </div>
      <div className="expense-item__price">499</div>
    </div>
  );
}

export default ExpenseItem;

//s1 here i have created a function i.e a component and it is a practice to sraert with Caps
// bcs when we will import it into main js than we can make it tags like <h1></h1> simmilarly like <ExpenseItem>
// </ExpenseItem> so page will know it is not html tags as it is not starting with small case

function ExpenseItem() {
  //   return <h2>Expense Item</h2>;

  //here in retuirn statement we can only have one root elements so what if we have to add 3 more things
  // return  <div>Amount</div>Title<div></div>Expense<div></div> so we will wrap it under one div i.e rot elements for now
  return (
    <div>
      <div>July 25 </div>
      <div>
        <h2>Udemy Course</h2>
      </div>
      <div>499</div>
    </div>
  );
}

export default ExpenseItem;

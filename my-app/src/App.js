import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
// import ExpenseItem from "./components/ExpenseItem";
function App() {
  //  37 here i am making a list of items which can be used dynamically using props
  const expenses = [
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

  return (
    //     <h2>lets get started</h2></div>
    //   </header>
    // </div>

    <div>
      <NewExpense></NewExpense>

      {/* SO HERE WE have used it just like html tags and than it will reflect on webpage*/
      /*this will tell react that we want this component to run as it alrerady imported at line 1 */}

      {/*37 extracting values dynamically using above created expenses at 37*/}
      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
  */}

      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;

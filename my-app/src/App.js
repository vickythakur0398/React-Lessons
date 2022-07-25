import ExpenseItem from "./components/ExpenseItem";
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <div>
    //     <h2>lets get started</h2></div>
    //   </header>
    // </div>

    <div>
    <h2>lets get started</h2>
    <p>this is updating Tada</p>

    // SO HERE WE have used it just like html tags and than it will reflect on webpage
    // this will tell react that we want this component to run as it alrerady imported at line 1
    <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;

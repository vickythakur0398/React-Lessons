

import './ExpensesFilter.css'

const ExpensesFilter = (props) => {
 

    const dropdownChangeHandler = (event)=>
    {
            props.onChangeFilter(event.target.value)
            // but here we want child to parent call i.e state up 
            // here we want to send value to Expenses.js
    }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2023'>2022</option>
          <option value='2022'>2021</option>
          <option value='2021'>2020</option>
          <option value='2020'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
import styles from "./MealItem.module.css";
import React, { Fragment } from "react";

import DUMMY_MEALS from "../Meals";
import Card from "../../UI/Card";
import MealItemForm from "./MealItemForm";

/*

const MealItem = (props) =>
{
    const mealsListName = DUMMY_MEALS.map(meal => <li>{meal.name}</li>);
    const mealsListDesc = DUMMY_MEALS.map(meal => <li>{meal.description}</li>);
    const mealsListPrice = DUMMY_MEALS.map(meal => <li>{meal.price}</li>);

    return 

    <div className={styles.meal}>
    <div> {mealsListName}</div>
    <div>{ mealsListDesc}</div>
    <div>{mealsListPrice}</div>
    
    </div>

   
    
}


*/

const MealItem = (props) => {
  const price = `Rs ${props.price.toFixed(2)}`;
  return (
    <li className= {styles.meal}>
      <div >
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      {/*here user can enter 
    amount for which i am making form whic is another component*/}
    <div>
   <MealItemForm></MealItemForm>
    </div>

    </li>
  );
};

export default MealItem;

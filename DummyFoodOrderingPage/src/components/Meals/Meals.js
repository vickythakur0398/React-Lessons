import React from 'react';
import AvailableMeals from './AvailableMeals';
import MealSummary from './MealSummary'
const Meals = () =>
{
    return(
    <React.Fragment>
    <MealSummary></MealSummary>
    <AvailableMeals></AvailableMeals>
    </React.Fragment>
    )
}

export default Meals;
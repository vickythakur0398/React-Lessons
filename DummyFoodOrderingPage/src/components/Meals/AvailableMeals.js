import styles from './AvailableMeals.module.css'


const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Rajasthani Thali",
    description: "Rajasthani Cousine",
    price: 2200,
  },
  {
    id: "m2",
    name: "Junkie Kids ",
    description: "Junk food items",
    price: 1600,
  },
  {
    id: "m3",
    name: "Butter Chicken",
    description: "raw, meaty",
    price: 3100,
  },
  {
    id: "m4",
    name: " Aam Amrit Thali ",
    description: "Healthy...and green...",
    price: 180,
  },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>);
  return (
    <section className={styles.meals}>
    {/*We want to use that dummy list which we have created  in most of the ream life
pages that data should be coming from web browser but here we are using
hard coded array
second task is to get this list so to do this we will use map() which goes into
each array object and return whatever bu using a funcn inside map*/}

{/*I am storing that in a const we can use it directly also and in function
i am simple getting meals name as of now before return*/}
      <ul>
      {mealsList}
      </ul>
    </section>
  );
};

export default AvailableMeals;

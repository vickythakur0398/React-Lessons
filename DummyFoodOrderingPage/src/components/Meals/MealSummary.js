import React, { Fragments } from "react";

import styles from "./MealSummary.module.css";

const MealSummary = () => {
  return (
   <section className={styles.summary}>
   <h2>Food Delivery, Expereince the New with us</h2>

   <p>
   You have the freedom to eat as per as your taste from our broad selection
   of Exotic and multicultural Indian Cousine. Enjoy patron!!
   </p>

   <p>
   All our food items are ISO certified and we are the only chain of Hotel
   where President of Adilias had dined with their family
   so what are you waiting for Tadaaa.</p>
   
   </section>
  );
};

export default MealSummary;

import React, { Fragment } from "react";
import styles from "./Header.module.css";

import HeaderCartButton from "./HeaderCartButton";

import FirstImage from "../../assets/FirstImage.jpg";

/*This is the header section of the page whiich contains name and cart 
and other div is for image which is present in assets and in react we can imort images 
just like css**/
const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>React Food Delivery</h1>
        <HeaderCartButton></HeaderCartButton>
      </header>
      {/*here i am using [] while using css bcs it has - so we cant use .*/}
      <div className={styles["main-image"]}>
        <img src={FirstImage} alt="Imaage full of meals" />
      </div>
    </Fragment>
  );
};

export default Header;

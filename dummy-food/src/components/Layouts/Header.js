import React, {Fragment} from 'react';
import styles from './Header.module.css';
import FirstImage from '../../assets/FirstImage.jpg'

const Header = (props) =>
{
    return (
    <Fragment>
    <header className= {styles.header}>
  
    <h1>React Food Delivery</h1>
   <button>Cart</button>
    
    </header>
   {/*here i am using [] while using css bcs it has - so we cant use .*/}
    <div className={styles['main-image']}>
    <img src ={FirstImage} alt="Photos full of meals"/>
    </div>
    
    
    </Fragment>
    )

}

export default Header;
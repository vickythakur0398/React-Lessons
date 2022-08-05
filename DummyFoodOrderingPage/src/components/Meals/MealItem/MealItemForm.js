import React from 'react'
import styles from './MealItemForm.module.css'
import Input from '../../UI/Input'

const MealItemForm = (props) =>
{

    const submitHandler = (event) =>
    {
        event.preventDefault();
        console.log('hi')

    }

    return(
        <form onClick={submitHandler} className={styles.form}>
        
    {/*<input type="number"></input>
    here istead of adding input we are creating a another component bcs 
in complex or big reac web page we would have want to take input so we can resue it
later*/}

{/* as we have used ...props.iput in 
Input componnet so we can send all these objects to it thats what we 
are doing, these are all id type etc are default prop which we can add to any
input element */}
<Input label ="Amount"   input={{
        id : 'Amount',
        type: 'number',
        min: '1',
        max: '5',
        step:'1',
        defaultValue: '1'
     }}/>

        <button>+ Add</button>
        
        </form>
    
    
    
    )
}

export default MealItemForm; 
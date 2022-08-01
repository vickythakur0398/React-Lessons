import React from "react";
import Card from "../UI/Card";

import styles from './UsersList.module.css'

const UsersList = (props) =>
{
        return (
        <Card className = {styles.users}>
        
        <ul>
        {props.users.map((prop) =>(
            <li>
            {prop.name} ({prop.age} years old)
            </li>
        ))}
       </ul>
        
        </Card>
        );
}


export default UsersList;
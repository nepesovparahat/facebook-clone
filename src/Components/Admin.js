import React from 'react';
import { Link } from 'react-router-dom';
export const Admin = () =>{
     return(
        <div>
            
            <Link to="/Sign_in"><button className="logout">Log out</button></Link>
            <h1>Welcome to the page </h1>
        </div>
    )
}
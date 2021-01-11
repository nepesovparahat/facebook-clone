import React, {useState} from 'react';
import {Link} from 'react-router-dom';
const Sign_in = ({Login, error}) =>{
   const [details, setdetails] = useState({email: "", password: ""});
   const submitHundler = e =>{
       e.preventDefault();
       Login(details);
   }

    return (
        <form onSubmit={submitHundler}>
            <input 
            
            type="email"
            required
            />
            <input 
        
            type="password"
            required
            />

            <button type = "submit">Submit</button>
            <Link to = "/Sign_up">Sign Up</Link>
        </form>
        
    );
};

export default Sign_in;
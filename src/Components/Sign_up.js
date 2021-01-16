import React, {useState} from 'react';
import {Link} from 'react-router-dom';
const Sign_up = () =>{
    const [Formdata, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
       
    });

    const updateFormdate = event => setFormData({
        ...Formdata,
        [event.target.name]: event.target.value
    });

    const { firstname,lastname, email, password} = Formdata;

    return (
        <div className="sign_up">
            <form>
            <input 
            value = {firstname}
            onChange = {e =>updateFormdate(e)}
            type="text"
            required
            />
            <input 
            value = {lastname}
            onChange = {e =>updateFormdate(e)}
            type="text"
            required
            />
            <input 
            value = {email}
            onChange = {e =>updateFormdate(e)}
            type="email"
            required
            />
            <input 
            value = {password}
            onChange = {e =>updateFormdate(e)}
            type="password"
            required
            />

            <button type = "submit">Submit</button>
            <Link to = "/Sign_in">Sign In</Link>
        </form>
        </div>  
    );
};

export default Sign_up;
import React, {useState} from 'react';
const Form = () =>{
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

    const {firstname, lastname, email, password} = Formdata;

    return (
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
        </form>
        
    );
};

export default Form;
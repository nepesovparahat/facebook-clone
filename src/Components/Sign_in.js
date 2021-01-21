import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  { useForm } from 'react-hook-form';
import { yupResolver} from '@hookform/resolvers';
import * as yup from 'yup';
const schema = yup.object().shape({
    email : yup
    .string()
    .email("Please enter valid email address!")
    .required("Email is required field"), 
    password : yup
    .string()
    .min(8).required("Password is required field")       
   
    });
export const Sign_in = ({ Login, error}) => {
   
       
    const {register, errors} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    });
    const [details, setdetails] = useState({ email: "", password: "" });
    const submitHundler = e => {
        e.preventDefault();
        Login(details);
    }

    return (
        <div className="sign">
            <form onSubmit={submitHundler}>
                <div className="container">
                {(error!="") ? (<div className="error">{error}</div>):""}
                    <div className="input_flux">
                    <input className="signIn"
                    ref={register}
                    id="email"
                    name="email"
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                    placeholder="Mobile number or email address" type="email" onChange={e => setdetails({ ...details, email: e.target.value })} value={details.email}
                    required
                     />
                    <input className="signIn"
                    ref={register}
                    id="password"
                    name="password"
                    error={!!errors.password}
                    helperText={errors?.password?.message}
                      placeholder="Password" type="password" onChange={e => setdetails({ ...details, password: e.target.value })} value={details.password}
                        required
                    />
                    </div>
                   <div>        
                       <div className="div_btn">
                       <button className="btn" type="submit">Log In</button>
                       </div>
                   
                    
                   
                   </div>
                   <span className="psw"><a href="#">Forgot password ?</a></span>
                   <hr className="line"></hr>
                   <Link to="/Sign_up"><button className="sign_up_btn">Sign Up</button></Link>
                </div>
                
            </form>
        </div>
    );
};

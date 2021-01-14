import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Sign_in = ({ Login, error }) => {
    const [details, setdetails] = useState({ email: "", password: "" });
    const submitHundler = e => {
        e.preventDefault();
        Login(details);
    }

    return (
        <div className="sign">
            <div>Login to Facebook</div>
            <form onSubmit={submitHundler}>
                <div className="container">
                    <div className="input_flux">
                    <input
                       placeholder="Mobile number or email address" type="email" onChange={e => setdetails({ ...details, email: e.target.value })} value={details.email}
                        required
                    />
                    <input
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
                   <Link to="/Sign_up">Sign Up</Link>
                </div>
                
            </form>
        </div>
    );
};

export default Sign_in;
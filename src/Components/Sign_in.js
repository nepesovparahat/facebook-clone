import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export const Sign_in = ({ Login, error }) => {
    const [details, setdetails] = useState({ email: "", password: "" });
    const submitHundler = e => {
        e.preventDefault();
        Login(details);
    }
    return (
        <div className="sign">
            <form onSubmit={submitHundler}>
                <div className="container">
                    {(error != "") ? (<span className="error">{error}</span>) : ""}
                    <div className="input_flux">
                        <input className="signIn"
                            placeholder="Mobile number or email address"
                            type="email"
                            onChange={e => setdetails({ ...details, email: e.target.value })}
                            value={details.email}
                            required
                        />
                        <input className="signIn"
                            placeholder="Password"
                            type="password"
                            onChange={e => setdetails({ ...details, password: e.target.value })}
                            value={details.password}
                            required
                        />
                    </div>
                    <div>
                        <div className="div_btn">
                            <button className="btn" type="submit">Log In</button>
                        </div> </div>
                    <span className="psw"><a href="#">Forgot password ?</a></span>
                    <hr className="line"></hr>
                    <Link to="/Sign_up"><button className="sign_up_btn">Sign Up</button></Link>
                </div>
            </form>
        </div>
    );
};


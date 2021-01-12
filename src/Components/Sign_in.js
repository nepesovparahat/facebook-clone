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
            <form onSubmit={submitHundler}>
                <div className="container">
                    <label><b>Email</b></label>
                    <input
                        type="email" onChange={e => setdetails({ ...details, email: e.target.value })} value={details.email}
                        required
                    />
                    <label><b>Password</b></label>
                    <input
                        type="password" onChange={e => setdetails({ ...details, password: e.target.value })} value={details.password}
                        required
                    />

                    <button type="submit">Submit</button>
                    <label>
                        <input type="checkbox" name="remember" /> Remember me</label>
                    <Link to="/Sign_up">Sign Up</Link>
                </div>
                <div className="container">
                    <span className="psw"><a href="#">Forgot Password ?</a></span>
                </div>
            </form>
        </div>
    );
};

export default Sign_in;
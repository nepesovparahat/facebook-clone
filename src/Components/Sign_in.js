import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const signInSchema = yup.object().shape({
    email: yup
        .string()
        .email("Email should have correct format")
        .required("Email required field"),
    password: yup
        .string()
        .required("Password required field")
})
export const Sign_in = () => {
    const { register, errors, handleSubmit } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(signInSchema),
    })
    const onSubmit = (data) => {
        if (data.email == admin.email && data.password == admin.password) {
            console.log(data)
            history.push("./admin");
        }
        else {
            console.log(errors.message);
        }

    }
    const history = useHistory();
    const admin = {
        email: "admin@gmail.com",
        password: "admin1234"
    }
    return (
            <div className="sign">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="container">
                        <div className="input_flux">
                            <input className="signIn"
                                style={{ border: !!errors.email ? '1px solid red' : errors?.email?.message }}
                                placeholder="Mobile number or email address"
                                type="email"
                                name="email"
                                ref={register}
                                required
                            />
                            <span className="err">{!!errors.email}{errors?.email?.message}</span>
                            <input className="signIn"
                                style={{ border: !!errors.password ? '1px solid red' : errors?.password?.message }}
                                placeholder="Password"
                                type="password"
                                name="password"
                                ref={register}
                                required
                            />
                            <span className="err">{!!errors.password}{errors?.password?.message}</span>
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


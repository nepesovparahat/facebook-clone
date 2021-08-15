import React, { useState } from "react";
import Logo from "./logo.svg";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const signInSchema = yup.object().shape({
  email: yup.string(),
  password: yup.string(),
});

const SignIn = () => {
  const { register, handleSubmit } = useForm({
    mode: "onChange",
    resolver: yupResolver(signInSchema),
  });
  const [errorEmail, setErrorEmail] = useState("");
  const onSubmit = (data) => {
    return Login_(data);
  };

  function Login_(data) {
    if (data.email !== admin.email || data.password !== admin.password) {
      setErrorEmail("E-mail or password entered does not match, try again.");
    } else {
      history.push("/Admin");
    }
  }
  const history = useHistory();
  const admin = {
    email: "admin@gmail.com",
    password: "admin1234",
  };

  return (
    <div className="wrapper">
      <div className="row">
        <div className="col-1">
          <img src={Logo} className="logo" alt="Facebook logo" />
          <div className="h2_">
            Facebook helps you connect and share with the people in your life.
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <div className="sign">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-body">
                {errorEmail !== "" ? (
                  <span className="err">{errorEmail}</span>
                ) : (
                  ""
                )}
              </div>
              <input
                className="signIn"
                style={{ border: errorEmail !== "" ? "1px solid red" : "" }}
                placeholder="Mobile number or email address"
                type="email"
                name="email"
                ref={register}
              />
              <div className="form-body">
                <input
                  className="signIn"
                  style={{ border: errorEmail !== "" ? "1px solid red" : "" }}
                  placeholder="Password"
                  type="password"
                  name="password"
                  ref={register}
                />
              </div>
              <div className="div_btn">
                <button className="btn" type="submit">
                  Log In
                </button>
              </div>
              <span className="psw">
                <a href="#">Forgotten password ?</a>
              </span>
              <div className="line"></div>
              <Link to="/SignUp">
                <button className="sign_up_btn">Create New Account</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

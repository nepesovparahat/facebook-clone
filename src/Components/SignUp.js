import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { connect } from "react-redux";
import * as yup from "yup";
import { addSignUpAction } from "../redux/SignUpAction";

const SignUpSchema = yup.object().shape({
  firstname: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name shoul not contain number!")
    .required("First name required field"),
  lastname: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name shoul not contain number!")
    .required("Last name required field"),
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field"),
  emailConfirm: yup
    .string()
    .oneOf([yup.ref("email")], "Your emal do not match"),
  password: yup
    .string()
    .matches(
      /^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1}).*$/,
      "Password must contain at least 6 characters, one special case character"
    )
    .required("Please enter your password"),
  birthday_day: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .required("Select your date of birth required"),
  birthday_month: yup.string().required("Select your date of month required"),
  birthday_year: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .required("Select your date of year required"),
  gender: yup.string().nullable().required("Select your gender required field"),
});

const SignUp = (props) => {
  const { SignUpList, add } = props;
  const [signUpstate, setsignUpstate] = useState({});
  const history = useHistory();
  const [shovBtn, setShovBtn] = useState(false);
  const shov = () => setShovBtn(true);
  const { register, errors, handleSubmit, watch } = useForm({
    mode: "onBlur",
    resolver: yupResolver(SignUpSchema),
  });
  const email = watch("email");
  const click = () => {
    history.push("/Results");
  };

  const onSubmit = () => {
    shov();
  };
  const yearArr = [];
  const dayArr = [];
  const monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  for (let i = 1; i <= 31; i++) {
    dayArr.push(i);
  }
  for (let i = 1910; i < 2022; i++) {
    yearArr.push(i);
  }
  const reversArr = yearArr.reverse();
  return (
    <div className="sign_up_nav">
      <div className="sign_up">
        <div>
          <span className="head">Sign Up</span>
          <br />
          <p className="subhead">It's quick and easy.</p>
        </div>
        <div className="frm">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="div1">
              <div className="input_div1">
                <input
                  className="input1"
                  style={{
                    border: !!errors.firstname
                      ? "1px solid red"
                      : errors?.firstname?.message,
                  }}
                  type="text"
                  name="firstname"
                  ref={register}
                  onChange={(event) => {
                    setsignUpstate({
                      ...signUpstate,
                      ...{ firstname: event.target.value },
                    });
                  }}
                  placeholder="Your name"
                />
                <div className="div1_err">
                  {!!errors.firstname}
                  {errors?.firstname?.message}
                </div>
              </div>
              <div className="input_div2">
                <input
                  className="input1"
                  style={{
                    border: !!errors.lastname
                      ? "1px solid red"
                      : errors?.lastname?.message,
                  }}
                  type="text"
                  placeholder="Your surname"
                  name="lastname"
                  ref={register}
                  onChange={(event) => {
                    setsignUpstate({
                      ...signUpstate,
                      ...{ lastname: event.target.value },
                    });
                  }}
                />
                <div className="div1_err">
                  {!!errors.lastname}
                  {errors?.lastname?.message}
                </div>
              </div>
            </div>
            <input
              className="signUpInput"
              style={{
                border: !!errors.email
                  ? "1px solid red"
                  : errors?.email?.message,
              }}
              type="email"
              name="email"
              placeholder="Your e-mail"
              ref={register}
              onChange={(event) => {
                setsignUpstate({
                  ...signUpstate,
                  ...{ email: event.target.value },
                });
              }}
            />
            <br />
            <span className="err">
              {!!errors.email}
              {errors?.email?.message}
            </span>
            {email && (
              <input
                className="signUpInput"
                style={{
                  border: !!errors.emailConfirm
                    ? "1px solid red"
                    : errors?.emailConfirm?.message,
                }}
                type="email"
                name="emailConfirm"
                placeholder="Re-enter e-mail"
                ref={register}
                onChange={(event) => {
                  setsignUpstate({
                    ...signUpstate,
                    ...{ emailConfirm: event.target.value },
                  });
                }}
              />
            )}
            <span className="err">
              {!!errors.emailConfirm}
              {errors?.emailConfirm?.message}
            </span>
            <input
              className="signUpInput"
              style={{
                border: !!errors.password
                  ? "1px solid red"
                  : errors?.password?.message,
              }}
              type="password"
              name="password"
              placeholder="New password"
              ref={register}
              onChange={(event) => {
                setsignUpstate({
                  ...signUpstate,
                  ...{ password: event.target.value },
                });
              }}
            />
            <br />
            <span className="err">
              {!!errors.password}
              {errors?.password?.message}
            </span>
            <span>
              <select
                aria-label="Day"
                ref={register}
                name="birthday_day"
                title="Day"
                className="select_"
                style={{
                  border: !!errors.birthday_day
                    ? "1px solid red"
                    : errors?.birthday_day?.message,
                }}
                onChange={(event) => {
                  setsignUpstate({
                    ...signUpstate,
                    ...{ birthday_day: event.target.value },
                  });
                }}
              >
                <option value="">Day</option>
                {dayArr.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
              <select
                aria-label="Month"
                ref={register}
                name="birthday_month"
                id="Month"
                title="Month"
                className="select_"
                style={{
                  border: !!errors.birthday_month
                    ? "1px solid red"
                    : errors?.birthday_month?.message,
                }}
                onChange={(event) => {
                  setsignUpstate({
                    ...signUpstate,
                    ...{ birthday_month: event.target.value },
                  });
                }}
              >
                <option value="">Month</option>
                {monthArr.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <select
                aria-label="Year"
                ref={register}
                name="birthday_year"
                title="Year"
                className="select_"
                style={{
                  border: !!errors.birthday_year
                    ? "1px solid red"
                    : errors?.birthday_year?.message,
                }}
                onChange={(event) => {
                  setsignUpstate({
                    ...signUpstate,
                    ...{ birthday_year: event.target.value },
                  });
                }}
              >
                <option value="">Year</option>
                {reversArr.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </span>
            <div className="err">
              {!!errors.birthday_day}
              {errors?.birthday_day?.message}
            </div>
            <div className="err">
              {!!errors.birthday_month}
              {errors?.birthday_month?.message}
            </div>
            <div className="err">
              {!!errors.birthday_year}
              {errors?.birthday_year?.message}
            </div>
            <span
              className="radio_span"
              style={{
                border: !!errors.gender
                  ? "1px solid red"
                  : errors?.gender?.message,
              }}
            >
              <label className="lbl">Famale</label>
              <input
                type="radio"
                className="input_"
                name="gender"
                value="Famele"
                ref={register}
                onChange={(event) => {
                  setsignUpstate({
                    ...signUpstate,
                    ...{ gender: event.target.value },
                  });
                }}
              />
            </span>
            <span
              className="radio_span"
              style={{
                border: !!errors.gender
                  ? "1px solid red"
                  : errors?.gender?.message,
              }}
            >
              <label className="lbl">Male</label>
              <input
                className="input_"
                type="radio"
                name="gender"
                value="Male"
                ref={register}
                onChange={(event) => {
                  setsignUpstate({
                    ...signUpstate,
                    ...{ gender: event.target.value },
                  });
                }}
              />
            </span>
            <span
              className="radio_span"
              style={{
                border: !!errors.gender
                  ? "1px solid red"
                  : errors?.gender?.message,
              }}
            >
              <label className="lbl">Custom</label>
              <input
                type="radio"
                className="input_"
                name="gender"
                value="Custom"
                ref={register}
                onChange={(event) => {
                  setsignUpstate({
                    ...signUpstate,
                    ...{ gender: event.target.value },
                  });
                }}
              />
            </span>
            <br />
            <span className="err">
              {!!errors.gender}
              {errors?.gender?.message}
            </span>
            <button className="register-btn" type="submit">
              Sign Up
            </button>
            <br />
            {shovBtn ? (
              <button
                className="record-btn"
                onClick={(event) => {
                  click();
                  event.preventDefault();
                  add(signUpstate);
                }}
              >
                Show Record
              </button>
            ) : null}
          </form>
        </div>
        <Link to="/SignIn" className="cancel">
          Cancel
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    SignUpList: state.signup,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    add: (res) => {
      dispatch(addSignUpAction(res));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

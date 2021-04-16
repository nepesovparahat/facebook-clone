import React from "react";
import { connect } from "react-redux";

const Results = (props) => {
  const { SignUpList } = props;
  let set = new Set();
  const objlength = Object.keys(SignUpList).length;
  for (let i = 0; i < objlength; i++) {
    set.add(SignUpList[i]);
  }
  //used the set method so that it does not show the same repeated data.
  const userset = [...set];

  return (
    <div className="form">
      <ul className="results">
        {userset.map((item, id) => (
          <li key={id}>
            <span>
              FIRSTNAME:
              <span className="result_item">{item.firstname}</span>
            </span>
            <br />
            <span>
              LASTNAME: <span className="result_item">{item.lastname}</span>
            </span>
            <br />
            <span>
              EMAIL: <span className="result_item">{item.email}</span>
            </span>
            <br />
            <span>
              PASSWORD: <span className="result_item">{item.password}</span>
            </span>
            <br />{" "}
            <span>
              BIRTHDAY: <span className="result_item">{item.birthday_day}</span>
            </span>
            <br />{" "}
            <span>
              MONTH OF BIRTH:{" "}
              <span className="result_item">{item.birthday_month}</span>
            </span>
            <br />{" "}
            <span>
              YEAR OF BIRTH:{" "}
              <span className="result_item">{item.birthday_year}</span>
            </span>
            <br />{" "}
            <span>
              {" "}
              GENDER: <span className="result_item"> {item.gender}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    SignUpList: state.signup,
  };
};

export default connect(mapStateToProps)(Results);

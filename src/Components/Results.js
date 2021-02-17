import React from 'react';
import { connect } from 'react-redux';
const Results =(props) =>{
    const {SignUpList} = props; 
console.log(SignUpList)
    return(
        <>
       <div>
           <ul>
               {SignUpList.map((d,i)=>(
                   <li key={i}>
                    FIRSTNAME:{d.firstname}
                   <br/>LASTNAME: {d.lastname}
                   <br/>EMAIL: {d.email}
                   <br/>PASSWORD: {d.password}
                   <br/> BIRTHDAY: {d.birthday_day}
                   <br/> MONTH OF BIRTH: {d.birthday_month}
                   <br/> YEAR OF BIRTH: {d.birthday_year}
                   <br/> GENDER: {d.gender}
                   </li>
               ))}
           </ul>
       </div>
        </>
    )
};
const mapStateToProps = (state) => {
    return {
      SignUpList: state,
    };
  };
export default connect(mapStateToProps) (Results)

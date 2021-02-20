import React from 'react';
import { connect } from 'react-redux';
const Results =(props) =>{
    const {SignUpList} = props; 
    let set =new Set(); 
    const objlength =Object.keys(SignUpList).length
    for(let i =0;i<objlength;i++){
        set.add(SignUpList[i]);
    }
    //used the set method so that it does not show the same repeated data.
    const userset = [...set]
    //used the spread operator to convert set to array
    return(
       <div className="form">
           <ul>
           {userset.map((item,id)=>(
               <li key={id}>
                    <span>FIRSTNAME:{item.firstname}</span>
                   <br/>
                   <span>LASTNAME: {item.lastname}</span>
                   <br/><span>EMAIL: {item.email}</span>
                   <br/><span>PASSWORD: {item.password}</span>
                   <br/> <span>BIRTHDAY: {item.birthday_day}</span>
                   <br/> <span>MONTH OF BIRTH: {item.birthday_month}</span> 
                   <br/> <span>YEAR OF BIRTH: {item.birthday_year}</span> 
                   <br/> <span> GENDER: {item.gender}</span>
               </li>
           ))}
       </ul>
       </div>
    )
};
const mapStateToProps = (state) => {
    return {
      SignUpList: state,
    };
  };
export default connect(mapStateToProps) (Results)

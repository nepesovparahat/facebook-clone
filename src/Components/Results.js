import React from 'react';
import {signUpAction} from '../redux/SignUpPrintAction';
import { connect } from 'react-redux';
const Results =(props) =>{
    const {SignUpList} = props; 

    return(
        <>
       <div>
           <ul>
               {SignUpList.map((d,i)=>(
                   <li key={i}>{d.firstname}-{d.lastname}</li>
               ))}
           </ul>
       </div>
        </>
    )
};
const mapStateToProps = (state) => {
    return {
        SignUpList: state.sign_Up,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        print: (res) =>{
            dispatch(signUpAction(res));
        },
    }
};
export default connect(mapStateToProps, mapDispatchToProps) (Results)

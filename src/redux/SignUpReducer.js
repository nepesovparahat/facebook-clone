import { signUpAction } from "./SignUpPrintAction";


const SignUpState = [];

const SignUpReducer = (state = SignUpState, action) => {
    switch (action.type) {
        case signUpAction.PRINT:
          state.push(action.payload);
          return [...state];
        default:
          return state;
      }
  }


export default SignUpReducer;
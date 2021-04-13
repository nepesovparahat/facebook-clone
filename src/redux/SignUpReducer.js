import { signupactiontype } from "./SignUpAction";

const SignUpState = [];
const SignUpReducer = (state = SignUpState, action) => {
	switch (action.type) {
		case signupactiontype.ADD:
			state.push(action.payload);
			return [...state];
		default:
			return state;
	}
};

export default SignUpReducer;

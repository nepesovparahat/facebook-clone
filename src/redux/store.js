import {createStore} from 'redux';
import SignUpReducer from './SignUpReducer';


const SignUpStore = createStore(SignUpReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default SignUpStore;
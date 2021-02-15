import {combineReducers,createStore} from 'redux';
import SignUpReducer from './SignUpReducer';

const rootReducer = {
    sign_Up: SignUpReducer
}
const store = createStore(combineReducers(rootReducer),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;
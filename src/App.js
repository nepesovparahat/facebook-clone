import  SignIn from './Components/SignIn'
import SignUp  from './Components/SignUp';
import  Admin  from './Components/Admin';
import Results from './Components/Results';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import './App.css';
 export function App() {
  return (
    <Router>
        <Switch>
          <Route exact path='/'><SignIn/></Route>
          <Route path='/SignIn'><SignIn /></Route>
          <Route path='/SignUp'><SignUp/></Route>
          <Route path='/Admin' ><Admin/></Route>
          <Route path = '/Results'><Results/></Route>
        </Switch>
    </Router>
  );
}



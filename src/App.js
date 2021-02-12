import  SignIn from './Components/SignIn'
import SignUp  from './Components/SignUp';
import  Admin  from './Components/Admin';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import './App.css';
export function App() {
  return (
    <Router>
      <div className="body">
        <Switch>
          <Route exact path='/'><SignIn/></Route>
          <Route path='/SignIn'><SignIn /></Route>
          <Route path='/SignUp'><SignUp/></Route>
          <Route path='/Admin' ><Admin/></Route>
        </Switch>
      </div>
    </Router>
  );
}


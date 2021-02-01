import { Sign_in } from './Components/Sign_in';
import { Sign_up } from './Components/Sign_up';
import { Admin } from './Components/Admin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
export function App() {
  

  return (
    <Router>
      <div className="body">
        <Switch>
          <Route exact path='/' component={Sign_in}/>
          <Route path='/Sign_in' component={Sign_in}/>
          <Route path='/Sign_up' component={Sign_up}/>
          <Route path='/Admin' component={Admin}/>
        </Switch>
      </div>
    </Router>
  );
}


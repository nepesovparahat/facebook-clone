import Sign_in from './Components/Sign_in';
import Sign_up from './Components/Sign_up';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import { useState } from 'react';


function App() {
  const admin ={
    email: "admin@gmail.com",
    password: "admin1234"
  }
  const [user, setUser] = useState({email: "", password: ""});
  const [error, setError] = useState('');

  const Login = details => {
    console.log(details);
    if(details.email==admin.email && details.password==admin.password){
      console.log("Loged In");
      setUser({
        email: details.email,
        password: details.password
      })
    }
    else{
      console.log("Details do not match!");
      
      setError('Your user email or password is do not match!')
    }
  }
  const Logout = () =>{
    console.log("Logout");
    setUser({email: "", password:""});
  }
  return (
    <Router>
      <div className="body">
        <Switch>
          <Route exact path = '/'>{(user.email != "") ? (
        <div className="welcome"><h2>Welcome, <span>Parahat</span></h2>
        <button onClick={Logout}  className="logout">Logout</button></div>) : (<Sign_in Login={Login} error={error} />)}</Route>
          <Route path = '/Sign_in'>{(user.email != "") ? (
        <div className="welcome"><h2>Welcome, <span>Parahat</span></h2>
        <button onClick={Logout} className="logout">Logout</button></div>) : (<Sign_in Login={Login} error={error} />)}</Route>
          <Route path = '/Sign_up'><Sign_up/></Route>
        </Switch> 
        </div>
    </Router>
  );
}
export default App;

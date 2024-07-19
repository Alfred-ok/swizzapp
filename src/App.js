
import Home from './Home';
import SignUp from './SignUp';
import Signin from './Signin';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/signin'>
          <Signin/>
        </Route>
        <Route path='/signup'>
          <SignUp/>
        </Route>
      </Switch>
    {
    false?<Signin/>:<SignUp/>
    }
    </div>
    </Router>
   
  );
}

export default App;

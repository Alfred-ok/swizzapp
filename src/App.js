
import SignUp from './SignUp';
import Signin from './Signin';

function App() {
  return (

    <div className="App">
    {
    true?<Signin/>:<SignUp/>
    }
    </div>
  );
}

export default App;

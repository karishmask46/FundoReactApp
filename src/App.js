import logo from './logo.svg';
import './App.css';
import './components/Pages/Signin/sIGnin.jsx'
import './components/Pages/Signin/siGnin.css'
import Signin from './components/Pages/Signin/sIGnin.jsx';
import Signup from './components/Pages/Signup/sIGnup.jsx'
function App() {
  return (
    <div className="App">
         <Signin/>
        {/* <Signup/> */}
    </div>
  );
}


export default App;

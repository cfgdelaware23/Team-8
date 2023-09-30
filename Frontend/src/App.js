import './App.css';
import Signup from './Signup';
import Homepage from './components/Homepage';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      {/* {Homepage} */}
      <Profile/>
      <Signup/>
    </div>
  );
}

export default App;

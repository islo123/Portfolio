import './App.css';
import Navbar from './component/Navbar';
import PersonalInformation from './component/PersonalInformation';
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      </Router>
      <hr/>
      <PersonalInformation/>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      </Router>
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;

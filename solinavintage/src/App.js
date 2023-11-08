import Header from "./components/Header"
import Footer from "./components/Footer"
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Etusivu from "./pages/Etusivu";

// import { useEffect, useState } from "react";

function App() {

/*   const [testMessage, setTestMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/testi")
    .then((res) => res.json())
    .then((data) => setTestMessage(data.test));
  }, []); */

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Etusivu />} />
        </Routes>  
      </Router>
    </div>
  );
}

export default App;

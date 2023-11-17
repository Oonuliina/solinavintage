import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Etusivu from "./pages/Etusivu";
import Tuotteet from "./pages/Tuotteet"
import Tuote from "./pages/Tuote"
import Meista from "./pages/Meista"
import Ostoskori from "./pages/Ostoskori"
import Kassa from "./pages/Kassa"

import { useEffect, useState } from "react";

function App() {

const [testMessage, setTestMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/testi")
    .then((res) => res.json())
    .then((data) => setTestMessage(data.test));
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Etusivu />} />
          <Route path="/tuotteet/:category" element={<Tuotteet />} />
          <Route path="/tuote/:id" element={<Tuote />} />
          <Route path="/meista" element={<Meista />} />
          <Route path="/ostoskori" element={<Ostoskori />} />
          <Route path="/kassa" element={<Kassa />} />
        </Routes>  
      </Router>
    </div>
  );
}

export default App;

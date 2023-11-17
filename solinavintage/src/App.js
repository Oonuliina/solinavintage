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

  const [cart, setCart] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/getcart")
    .then((res) => res.json())
    .then((data) => setCart(data.product))
  }, []);

  return (
    <div className="App">
      <p>{cart}</p>
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

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Etusivu from "./pages/Etusivu";
import Tuotteet from "./pages/Tuotteet"
import Tuote from "./pages/Tuote"
import Meista from "./pages/Meista"
import Ostoskori from "./pages/Ostoskori"
import Kassa from "./pages/Kassa"
import useLoginToken from './components/useLoginToken';
import { useEffect, useState } from "react";
import Kirjautuminen from './pages/Kirjautuminen';
import Rekisteröityminen from './pages/Rekisteröityminen';

function App() {
  
  const {loginToken, setLoginToken} = useLoginToken();

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, {id: item.id}])
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Etusivu addToCart={addToCart}/>} />
          <Route path="/tuotteet" element={<Tuotteet addToCart={addToCart}/>} />
          <Route path="/tuotteet/:category" element={<Tuotteet  addToCart={addToCart}/>} />
          <Route path="/tuote/:id" element={<Tuote  addToCart={addToCart}/>} />
          <Route path="/meista" element={<Meista />} />
          <Route path="/ostoskori" element={<Ostoskori cart={cart} />} />
          <Route path="/kassa" element={<Kassa />} />
          <Route path="/kirjautuminen" element={<Kirjautuminen setLoginToken={setLoginToken}/>} />
          <Route path="/rekisteröityminen" element={<Rekisteröityminen />} />
        </Routes>  
      </Router>
    </div>
  );
}

export default App;

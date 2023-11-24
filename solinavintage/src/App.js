import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Etusivu from "./pages/Etusivu";
import Tuotteet from "./pages/Tuotteet";
import Tuote from "./pages/Tuote";
import Meista from "./pages/Meista";
import Ostoskori from "./pages/Ostoskori";
import Kassa from "./pages/Kassa";
import useLoginToken from "./components/useLoginToken";
import React, { useEffect, useState } from "react";
import Kirjautuminen from "./pages/Kirjautuminen";
import Rekisteröityminen from "./pages/Rekisteröityminen";

function App() {
  const { loginToken, setLoginToken } = useLoginToken();
  const loggedIn = sessionStorage.getItem("loginToken");

  const [cart, setCart] = useState([]);

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  function isInCart(a, obj){
    var i = a.length;
    while (i--) {
      if (a[i].id === obj) {
        return true
      }
    } return false
  }

  const addToCart = (item) => {
    if(!isInCart(cart, item.id)){
      setCart([...cart, { id: item.id, price: item.price }]);
      if(loggedIn){
        sessionStorage.setItem()
      }
      alert("Tuote lisätty ostoskoriin!");
    } else {
      alert("Tuote on jo ostoskorissasi!")
    }
  };

  const removeFromCart = (item) => {
    let idx = cart.findIndex(function(prod, i){
      return prod.id === item.id
    })
    if (idx > -1){
      cart.splice(idx, 1);
      forceUpdate();
    }
  }

  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Etusivu cart={cart} addToCart={addToCart} />}
          />
          <Route
            path="/tuotteet"
            element={<Tuotteet cart={cart} addToCart={addToCart} />}
          />
          <Route
            path="/tuotteet/:category"
            element={<Tuotteet cart={cart} addToCart={addToCart} />}
          />
          <Route
            path="/tuote/:id"
            element={<Tuote cart={cart} addToCart={addToCart} />}
          />
          <Route path="/meista" element={<Meista cart={cart} />} />
          <Route path="/ostoskori" element={<Ostoskori removeFromCart={removeFromCart} cart={cart} />} />
          <Route path="/kassa" element={<Kassa cart={cart} />} />
          <Route
            path="/kirjautuminen"
            element={<Kirjautuminen setLoginToken={setLoginToken} />}
          />
          <Route path="/rekisteröityminen" element={<Rekisteröityminen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

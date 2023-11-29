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
import toast, { Toaster } from "react-hot-toast"

function App() {
  const { loginToken, setLoginToken } = useLoginToken();
  const loggedIn = sessionStorage.getItem("loginToken");
  var findCart = "asd";
  if(loggedIn){
    findCart = loggedIn.replaceAll("\"", "");
  }
  const cartFromStorage = JSON.parse(sessionStorage.getItem(findCart) || "[]")

  const [cart, setCart] = useState(cartFromStorage);

  function isInCart(a, obj){
    var i = a.length;
    while (i--) {
      if (a[i].id === obj) {
        return true
      }
    } return false
  }

  async function updateCart({cartId, cartItems}){
    return fetch('https://solina-server.onrender.com/updatecart', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({cartId, cartItems})
    }).then(data => data.json())
  };

  const whatCart = async(a, b) => {
    await updateCart({
        cartId: a,
        cartItems: b
    }).then(res => {
        console.log(res)
    })
  }

  useEffect(() => {
    if(loggedIn){
      let cartToken = loggedIn.replaceAll("\"", "");
      sessionStorage.setItem(cartToken, JSON.stringify(cart))
      whatCart(cartToken, cart);
    }
  }, [cart])


  const addToCart = (item) => {
    if(!isInCart(cart, item.id)){
      setCart([...cart, { id: item.id, price: item.price }]);
      toast("Tuote lisätty ostoskoriin!", {
        icon: '😍',
      });
    } else {
      toast.error("Tuote on jo ostoskorissasi!")
    }
  };

  const removeFromCart = (item) => {
    const newCart = cart.filter((a) => a.id !== item.id);
    setCart(newCart)
  };

  

  return (
    <div className="App">
      <Toaster position="top-right" />
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

/* Imports */
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

/* App core */
function App() {
  /* Defining state for logged in user. Most of the code for tracking this status comes from useLoginToken component */
  const { loginToken, setLoginToken } = useLoginToken();
  /* Check for logged in user */
  const loggedIn = sessionStorage.getItem("loginToken");
  /* Defining an "empty" variable for cleaning the output from the login token. */
  var findCart = "asd";
  /* If logged in... */
  if(loggedIn){
    /* ...clean the login token... */
    findCart = loggedIn.replaceAll("\"", "");
  }
  /* ...so we can fnd the correct cart for the user OR set the variable to an empty array... */
  const cartFromStorage = JSON.parse(sessionStorage.getItem(findCart) || "[]")
  /* ...because here we set the shopping cart state to either the users cart we found or an empty array */
  const [cart, setCart] = useState(cartFromStorage);

  /* Function for checking if a product is already in the cart: a is cart and obj is the item we want to add */
  function isInCart(a, obj){
    var i = a.length;
    while (i--) {
      if (a[i].id === obj) {
        return true
      }
    } return false
  }

  /* Function for updating the cart to the database */
  async function updateCart({cartId, cartItems}){
    return fetch('https://solina-server.onrender.com/updatecart', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({cartId, cartItems})
    }).then(data => data.json())
  };

  /* Function where we call the previous function, but we actually pass it the correct variables */
  const whatCart = async(a, b) => {
    await updateCart({
        cartId: a,
        cartItems: b
    }).then(res => {
        console.log(res)
    })
  }

  /* Tracking the status of the on site cart array and updating the cart token (where database gets it from) in real time */
  useEffect(() => {
    if(loggedIn){
      let cartToken = loggedIn.replaceAll("\"", "");
      sessionStorage.setItem(cartToken, JSON.stringify(cart))
      whatCart(cartToken, cart);
    }
  }, [cart])

  /* Function to add items to the cart. First we pass an item to the function... */
  const addToCart = (item) => {
    /* ...and use the function to check if the item is in the cart */
    if(!isInCart(cart, item.id)){
      /* If the item was not in the cart we add it... */
      setCart([...cart, { id: item.id, price: item.price }]);
      /* ...and tell the user that the product was added to the cart */
      toast("Tuote lisätty ostoskoriin!", {
        icon: '😍'
      });
    } else {
      /* If the item was already in the cart we tell the user they can't add another one */
      toast.error("Tuote on jo ostoskorissasi!")
    }
  };

  /* Function to remove an item from the cart */
  const removeFromCart = (item) => {
    /* This function is only used in the shopping cart, where you can see the items in the cart, so no need to check for them...
    ...we just find and cut the passed item from the array... */
    const newCart = cart.filter((a) => a.id !== item.id);
    /* ...and set cart as the cut array */
    setCart(newCart)
  };

  
  /* We return all the routes for the app. 
  Notice we pass a lot of functions and the cart array around...
  ...because we need them in other pages and components */
  return (
    <div className="App">
      <Toaster position="top-center" />
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

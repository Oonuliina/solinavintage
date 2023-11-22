import {useState, useEffect} from 'react';

async function getCart(user){
    return fetch('http://localhost:5000/haekori', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    }) .then(data => data.json())
}

export default function useShoppingCart() {

    const loggedIn = sessionStorage.getItem("loginToken");

    useEffect(() => {
      if(loggedIn){
        const shoppingCartArray = [];
        let user = loggedIn.replaceAll('"', '');

        async function gettingCart(){
            await getCart({
                user
            }).then(res => {
                sessionStorage.setItem(res.cartId, JSON.stringify(shoppingCartArray));
            })
        }
        gettingCart();

        shoppingCartArray.push("kakka", "pissa")
      }
    },[]);

}
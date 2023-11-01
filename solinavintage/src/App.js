import Header from "./components/Header"
import Footer from "./components/Footer"
import './App.css';
import { useEffect, useState } from "react";

function App() {

/*   const [testMessage, setTestMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/testi")
    .then((res) => res.json())
    .then((data) => setTestMessage(data.test));
  }, []); */

  return (
    <div className="App">
      {/* <h1>{testMessage}</h1> */}
       <Header />
       <Footer />
    </div>
  );
}

export default App;

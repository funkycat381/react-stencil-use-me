import "./App.css";
import { useState } from "react";
import studentJson from "./assets/StudentJson.json";
import StudentProfile from "./components/studentProfile";
import React from 'react';

function App() {
  const [cartItems, setCartItems] = useState([])

  function addToCart(item) {
    setCartItems([...cartItems, item])
  }

  function calculateTotal() {
    let total = 0
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].age
    }
    return total
  }

  return (
    <div className="App">
      <h1>My Advisees</h1>
      <div className="student-container">
        {studentJson.map((item, index) => (
          <StudentProfile item={item} addToCart={addToCart}/>
        ))}
      </div>
      <div>
        <h2>List of Advisees</h2>
        {cartItems.map((item, index) => (<p> {item.LastName}, {item.FirstName} </p>))}
        <h2>Total: {calculateTotal()}</h2>
      </div>
    </div>
  );
}

export default App;

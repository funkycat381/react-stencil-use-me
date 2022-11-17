import "./App.css";
import { useState } from "react";
import studentJson from "./assets/StudentJson.json";
import StudentProfile from "./components/studentProfile";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cartItems, setCartItems] = useState([])

  function addToCart(item) {
    setCartItems([...cartItems, item])
  }

  function removeFromList(value) {
    const filteredArray = cartItems.filter((item) => {
      return item.field == value;
    })
    setCartItems = filteredArray
    return setCartItems  
  }

  function calculateTotal() {
    let runningAverage = 0
    for (let i = 0; i < cartItems.length; i++) {
      runningAverage += cartItems[i].grade / cartItems.length
    }
    return runningAverage
  }

  function sortBy(field) {
    const sortedArray = cartItems.sort((a, b) => {
      return a.field - b.field;
    })
    setCartItems = sortedArray;
    return setCartItems
  }

  function filterBy(value) {
    const filteredArray = cartItems.filter((item) => {
      return item.id == value;
    })
    setCartItems = filteredArray
    return setCartItems
  }


  /* At least 2 filtering categories
- State
- Major
  At least 1 sorting feature
  - Age
*/


  return (
    <div className="App">
      <div className="header">
        <h1>Program Applicants</h1>
      </div>
      <div classname="Sidebar">
        sidebar()
      </div>
      
      <div className="student-container">
        {studentJson.map((item, index) => (
          <StudentProfile item={item} addToCart={addToCart} />
        ))}
      </div>
      <div>

      </div>
    </div>
  );
}

export default App;

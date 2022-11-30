import "./App.css";
import { useState } from "react";
import studentJson from "./assets/StudentJson.json";
import StudentProfile from "./components/studentProfile";
import React from 'react';
import Radio from "./components/radio.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

function App() {
  const [cartItems, setCartItems] = useState([])

  const [type, setType] = useState("All");

  const [major, setMajor] = useState("All");

  const [sortby, setSortBy] = useState("SAT");

  function selectFilterType(item) {
    setType(item);
  }

  function selectMajorFilter(item) {
    setMajor(item);
  }

  function selectSortBy(item) {
    setSortBy(item)
  }

  const matchesFilterMajor = item => {
    // all items should be shown when no filter is selected
    if (major === "All") {
      return true
    } else if (major === item.Major) {
      return true
    } else {
      return false
    }
  }

  const matchesFilterType = item => {
    // all items should be shown when no filter is selected
    if (type === "All") {
      return true
    } else if (type === item.State) {
      return true
    } else {
      return false
    }
  }

  const sortedData = studentJson.sort((a, b) => {
    if (sortby === "Age") {
      return a.Age - b.Age;
    }
    if (sortby === "GPA") {
      return b.grade - a.grade
    }
    else {
      return a.SAT - b.SAT
    }
  })
  const statefilteredData = sortedData.filter(matchesFilterType)
  const filteredData = statefilteredData.filter(matchesFilterMajor)

  function addToCart(item) {
    if (cartItems.includes(item) == false) {
      setCartItems([...cartItems, item])
    }

  }

  function removeFromCart(value) {
    setCartItems(cartItems.filter(function (ele) {
      return ele.key !== value
    }))
  }

  function calculateTotal() {
    let runningAverage = 0
    for (let i = 0; i < cartItems.length; i++) {
      runningAverage += cartItems[i].grade / cartItems.length
    }
    return runningAverage
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Program Applicants</h1>
      </div>
      <div className="Sidebar">
        <h2>
          Sort By:
        </h2>
        <button onClick={() => { selectSortBy("Age") }}> Age </button>
        <br></br>
        <button onClick={() => { selectSortBy("GPA") }}> GPA </button>
        <h2>
          Filter By:
        </h2>
        <h3>
          State
        </h3>

        <Form>
          {['Radio'].map((type) => (
            <div key={`default-${type}`} className="mb-3">
              <Form.Check
                name="groupa"
                type={type}
                id="100"
                label="All States"
                onSelect={selectFilterType}
                onClick={() => selectFilterType("All")}
              />
              <Form.Check
                name="groupa"
                type={type}
                id="5"
                label="Arizona"
                onSelect={selectFilterType}
                onClick={() => selectFilterType("Arizona")}
              />
              <Form.Check
                type={type}
                name="groupa"
                id="1"
                label="California"
                onSelect={selectFilterType}
                onClick={() => selectFilterType("California")}
              />
              <Form.Check
                type={type}
                name="groupa"
                id="10"
                label="Florida"
                onSelect={selectFilterType}
                onClick={() => selectFilterType("Florida")}
              />
              <Form.Check
                name="groupa"
                type={type}
                id="6"
                label="Georgia"
                onSelect={selectFilterType}
                onClick={() => selectFilterType("Georgia")}
              />
              <Form.Check
                type={type}
                name="groupa"
                id="23"
                label="New York"
                onSelect={selectFilterType}
                onClick={() => selectFilterType("New York")}
              />
              <Form.Check
                type={type}
                name="groupa"
                id="81"
                label="Ohio"
                onSelect={selectFilterType}
                onClick={() => selectFilterType("Ohio")}

              />
            </div>
          ))}
        </Form>

        <h3>
          Department
        </h3>
        <Form>
          {['Radio'].map((type) => (
            <div key={`default-${type}`} className="mb-3">
              <Form.Check
                name="groupc"
                type={type}
                id="11"
                label="All Departments"
                onSelect={selectMajorFilter}
                onClick={() => selectMajorFilter("All")}
              />
              <Form.Check
                name="groupc"
                type={type}
                id="5"
                label="Econ"
                onSelect={selectMajorFilter}
                onClick={() => selectMajorFilter("Econ")}
              />
              <Form.Check
                type={type}
                name="groupc"
                id="1"
                label="Math"
                onSelect={selectMajorFilter}
                onClick={() => selectMajorFilter("Math")}
              />
              <Form.Check
                type={type}
                name="groupc"
                id="10"
                label="Politics"
                onSelect={selectMajorFilter}
                onClick={() => selectMajorFilter("Politics")}
              />
            </div>
          ))}
        </Form>
        <h2>List of Accepted Students</h2>
        {cartItems.map((item, index) => (<p> {item.LastName}, {item.FirstName} <button onClick={() => removeFromCart(item.key)}> Remove </button>
        </p>))}
        <h3>Avg. GPA of <br></br> Accepted Students: {calculateTotal()}</h3>
      </div>
      <div>
      </div>
      <div className="student-container">
        {filteredData.map((item, index) => (
          <StudentProfile item={item} addToCart={addToCart} removeFromCart={removeFromCart} />
        ))}
      </div>
    </div>
  )
}

export default App;

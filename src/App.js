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

  const [major, setMajor] = useState([]);

  const [sortby, setSortBy] = useState("SAT");

  function selectFilterType(item) {
    setType(item);
  }

  function selectMajorFilter(item) {
    setMajor(item);
  }

  function handleChange(event) {
    setMajor(event);
  }

  function selectSortBy(item) {
    setSortBy(item)
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

  const matchesFilterMajor = item => {
    return true
    // all items should be shown when no filter is selected
   /* if (major === []) {
      return true
    } else if (item.Major.includes(major)) {
      if (major.includes(item.Major)) {
        return true
      }
      else {
        return false
      }
    }
    ///TODO: Use setMajor to change states  of list!
    else return false*/
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

  //- creates a filtering condition


  function addToCart(item) {
    setCartItems([...cartItems, item])
  }

  function removeFromCart(value) {
    setCartItems(cartItems.filter(function(ele) {
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
              id= "5"
              label="Arizona"
              
            />
            <Form.Check
              type={type}
              name="groupa"
              id= "1"
              label="California"
            />
            <Form.Check
              type={type}
              name="groupa"
              id= "10"
              label="Florida"
            />
            <Form.Check
              name="groupa"
              type={type}
              id= "6"
              label="Georgia"
            />
            <Form.Check
              type={type}
              name="groupa"
              id= "23"
              label="New York"
            />
            <Form.Check
              type={type}
              name="groupa"
              id= "81"
              label="Ohio"
              onChange={this.handleChange}
              />
          </div>
        ))}
    </Form>

        <br></br>
        <button onSelect={selectFilterType} onClick={() => selectFilterType("All")}> Show All States </button>

        <br></br>
        <button onSelect={selectFilterType} onClick={() => selectFilterType("Arizona")}> Arizona </button>
        <br></br>
        <button onSelect={selectFilterType} onClick={() => selectFilterType("California")}> California </button>
        <br></br>
        <button onSelect={selectFilterType} onClick={() => selectFilterType("Florida")}> Florida </button>
        <br></br>

        <button onSelect={selectFilterType} onClick={() => selectFilterType("Georgia")}> Georgia </button>

        <br></br>
        <button onSelect={selectFilterType} onClick={() => selectFilterType("New York")}> New York </button>
        <br></br>
        <button onSelect={selectFilterType} onClick={() => selectFilterType("Ohio")}> Ohio </button>
        <br></br>
        <h3>
          Major
        </h3>
        <button onSelect={selectMajorFilter} onClick={() => selectMajorFilter([])}> Show all majors </button>
        <Form>
      {['Checkbox'].map((type) => (
          <div key={`default-${type}`} className="mb-3">
            <Form.Check
              name="groupa"
              type={type}
              id= "5"
              label="Econ"
            />
            <Form.Check
              type={type}
              name="groupa"
              id= "1"
              label="Math"
            />
            <Form.Check
              type={type}
              name="groupa"
              id= "10"
              label="politics"
              onSelect
            />
          </div>
        ))}
    </Form>
        <button onSelect={selectMajorFilter} onClick={() => selectMajorFilter([...major, "Econ"])}> Econ </button>
        <br></br>
        <button onSelect={selectMajorFilter} onClick={() => selectMajorFilter([...major, "Math"])}> Math </button>
        <br></br>
        <button onSelect={selectMajorFilter} onClick={() => selectMajorFilter([...major, "Politics"])}> Politics </button>

        <h3>
          Application Status
        </h3>
        //TODO: Fix this TODO: Multiple Majors edge case
        //TODO: Checkboxes/radios formatting
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

function sidebar() {
    return (
        <div className="Sidebar">
            <h2>
                Sort By:
            </h2>
            <button onClick={() => { sortBy("age") }}> Age </button>
            <br></br>
            <button onClick={() => { sortBy("gpa") }}> GPA </button>
            <h2>
                Filter By:
            </h2>
            <h3>
                State
            </h3>
            <button onClick={() => { filterBy("arizona") }}> Arizona </button>
            <br></br>

            <button onClick={() => { filterBy("california") }}> California </button>
            <br></br>
            <button onClick={() => { filterBy("florida") }}> Florida </button>
            <br></br>

            <button onClick={() => { filterBy("georgia") }}> Georgia </button>
            <br></br>

            <button onClick={() => { filterBy("new york") }}> New York </button>
            <br></br>
            <button onClick={() => { filterBy("ohio") }}> Ohio </button>
            <br></br>
            <h3>
                Major
            </h3>
            <button onClick={() => { filterBy("econ") }}> Econ </button>
            <br></br>
            <button onClick={() => { filterBy("math") }}> Math </button>
            <br></br>
            <button onClick={() => { filterBy("politics") }}> Politics </button>
            <h3>
                Application Status
            </h3>
            <button onClick={() => { filterBy("accepted") }}> On Accepted List </button>
            <br></br>
            <button onClick={() => { filterBy("not accepted") }}> Not on Accepted List </button>
            <h2>List of Accepted Students</h2>
            {cartItems.map((item, index) => (<p> {item.LastName}, {item.FirstName} <button onClick={() => { removeFromList(item.id) }}> Remove </button>
            </p>))}
            <h3>Avg. GPA of <br></br> Accepted Students: {calculateTotal()}</h3>
        </div>
    )
}

export default sidebar;

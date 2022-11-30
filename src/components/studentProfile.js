import React from 'react';

function StudentProfile(props) {
    return (
        <div className="StudentProfile">
            <h2>{props.item.FirstName} {props.item.LastName}</h2>
            <img src={props.item.Image}/>
            <h3> Department: {props.item.Major}</h3>
            <h3> Student Status: {props.item.StudentStatus} </h3>
            <h4> Age: {props.item.Age}</h4>
            <h4> GPA (out of 100): {props.item.grade} </h4>
            <p> State: {props.item.State} </p>
            <button onClick={() => {props.addToCart(props.item)}}> Add to List of Accepted Students </button>
        </div>
    )
}

export default StudentProfile;
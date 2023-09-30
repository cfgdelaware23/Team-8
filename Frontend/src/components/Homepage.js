import React from 'react'; 
import './Homepage.css';

const Homepage = () => {
    return (
        <div className="home">
            <div className="logo">
            <img src='./wellfare.png' alt="wellfare logo" />
                <h1>Wellfare</h1>
            </div>
            <div className="sign-up">
                <input placeholder='Phone Number'></input>
                <a href='/profile'><button>Login with SMS</button></a>
                <br></br>
                <a href='/signup'><button>I'm a new user!</button></a>
            </div>
        </div>
    );
};

export default Homepage();
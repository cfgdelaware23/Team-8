import React from "react";
import { useState } from "react";
import './Profile.css';

const Profile = () => {

    const [name, setName] = useState('tester');
    const [code, setCode] = useState('A32B21123');
    const [savings, setSavings] = useState('45%');

    return (
        <div class="profile">
            <img className="logo" src="https://freight.cargo.site/t/original/i/ea17aa273ae2e3139893647fbfee071209307581c2659681914b6dc37e99fe22/Wellfare-secondarylogo-3color.png" alt="logo"/>
            <h3>Welcome, {name}</h3>

            <div className="wrapper">
                <div className="row">
                    <div className="column">
                        <div className="discount"> 
                            <p>Use code:</p>
                            <h2>{code}</h2>
                            <p>to save <strong>{savings}</strong> on all products!</p>
                        </div>
                    </div>
                    
                    <div className="column">
                        <div className="events">
                            <p>Community Events Near You!</p>
                            <ul>
                                <li>10/15 3-6pm Pumpkin Picking </li>
                                <li>10/25 8-10pm Movie Night</li>
                                <li>10/31 11am-1pm Halloween Parade</li>
                            </ul>
                    </div>
                    </div>
                </div>
                
                
            </div>

            <div className="footer">
                <h4>Millions of Americans face barriers to accessing nutritious food everyday. We're on a mission to change that.</h4>
            </div>
    
        </div>
    );
};

export default Profile;
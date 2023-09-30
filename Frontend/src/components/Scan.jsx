// redirected here from Member because user wants to scan their card
import * as React from 'react';
import load from '../assets/load.gif'

export default function Scan() {

    return (
        <div>
            <br></br>
            <img src="https://codeforgood.net/wp-content/uploads/2023/09/Wellfare-Logo-1536x304.png" height="50px"/>
            <h2>Greetings Bill!</h2>
            <h3>Prompt the customer to scan their card.</h3>
            <img src={load} alt="loading..." />
             {/* create some timer code where after 10 seconds message appears about discount  */}
             {/* display message like: "Bob recieves 40% off on each purchase. Today he saved $16.88" */}
        </div>
    )
}
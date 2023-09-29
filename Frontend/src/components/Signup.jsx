import React, { useState } from "react";
//import React from "react";

  const Signup = () => {
    const [name, setName] = useState(""); // Enter your full name
    const [number, setNumber] = useState(""); // Enter your mobile phone number
    const [assistance, setAssistance] = useState(""); // Are you enrolled in an assistance program?  SNAP, WIC, or None
    const [housing, setHousing] = useState(""); // Do you live in public housing? - Yes, No

    const handleSubmit = (event) => {
      console.log(`
        Name: ${name}
        Number: ${number}
        Assistance: ${assistance}
        Housing: ${housing}
      `);

      event.preventDefault();

    }
    return (
      <form onSubmit={handleSubmit}>
        <h1>Become a member for discounted prices</h1>

        <label>
          Full Name {/* text box */}
          <input
            name="name"
            type="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required />
        </label>

        <label>
          Cellphone Number {/* text box */}
          <input
            name="number"
            type="number"
            value={number}
            onChange={e => setNumber(e.target.value)}
            required />
        </label>

        <label>
          Are you enrolled in an assistance program? {/* radio buttons */}
          <input
            name="assistance"
            type="assistance"
            value={assistance}
            onChange={e => setAssistance(e.target.value)}
            required />
            <input type="radio" id="snap" name="assistance_program" value="SNAP"/>
            <label for="snap">SNAP</label><br></br>
            <input type="radio" id="wic" name="assistance_program" value="WIC"/>
            <label for="wic">WIC</label><br></br>
            <input type="radio" id="both" name="assistance_program" value="Both"/>
            <label for="both">Both</label><br></br>
            <input type="radio" id="none" name="assistance_program" value="None"/>
            <label for="none">None</label><br></br>
        </label>

        <label>
          Do you live in public housing? {/* radio buttons */}
          <input
            name="housing"
            type="housing"
            value={housing}
            onChange={e => setHousing(e.target.value)}
            required />
            <input type="radio" id="yes" name="housing_status" value="Yes"/>
            <label for="yes">Yes</label><br></br>
            <input type="radio" id="no" name="housing_status" value="No"/>
            <label for="no">No</label><br></br>
        </label>

        <button>Submit</button>
      </form>
    );
  };

export default Signup();
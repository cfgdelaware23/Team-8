import { useState } from 'react';

export default function Signup() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Enter your full name: ${inputs.name}`)
    console.log(`Enter your cellphone number: ${inputs.number}`)
    console.log(`Are you enrolled in an assistance program? ${inputs.assistance}`)
    console.log(`Do you live in public housing? ${inputs.housing}`)
    console.log(`Have you faced food insecurity? ${inputs.insecurity}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your full name: 
      <input 
        type="text" 
        name="name" 
        value={inputs.name || ""} 
        onChange={handleChange}
        required />
      </label><br></br>
      <label>Enter your cellphone number: 
        <input 
          type="tel" 
          name="number" 
          value={inputs.number || ""} 
          onChange={handleChange}
          required />
        </label>
        <br></br>
        <label>
           Are you enrolled in an assistance program? {/* radio buttons */}
           <input
            type="radio"
            name="assistance"
            value="SNAP"
            checked={inputs.assistance === "SNAP"}
            onChange={handleChange}
            required /> SNAP
            <input
            type="radio"
            name="assistance"
            value="WIC"
            checked={inputs.assistance === "WIC"}
            onChange={handleChange}
            required /> WIC
            <input
            type="radio"
            name="assistance"
            value="Both"
            checked={inputs.assistance === "Both"} 
            onChange={handleChange}
            required /> Both
            <input
            type="radio"
            name="assistance"
            value="None"
            checked={inputs.assistance === "None"}
            onChange={handleChange}
            required /> None
        </label>
        <br></br>
        <label>
           Do you live in public housing? {/* radio buttons */}
           <input
            type="radio"
            name="housing"
            value="Yes"
            checked={inputs.housing === "Yes"}
            onChange={handleChange}
            required /> Yes
            <input
            type="radio"
            name="housing"
            value="No"
            checked={inputs.housing === "No"}
            onChange={handleChange}
            required /> No
            </label>
        <br></br>
        <label>
        Have you faced food insecurity? {/* radio buttons */}
           <input
            type="radio"
            name="insecurity"
            value="Yes"
            checked={inputs.insecurity === "Yes"}
            onChange={handleChange}
            /> Yes
            <input
            type="radio"
            name="insecurity"
            value="No"
            checked={inputs.insecurity === "No"}
            onChange={handleChange}
            /> No
            </label>
            <br></br>
        <input type="submit" />
    </form>
  )
}
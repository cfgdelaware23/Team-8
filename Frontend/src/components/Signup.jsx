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
    console.log(`The name you entered was: ${inputs.name}`)
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
      <label>Enter cellphone number: 
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
            value={inputs.assistance} 
            onChange={handleChange}
            required /> SNAP
            <input
            type="radio"
            name="assistance"
            value={inputs.assistance} 
            onChange={handleChange}
            required /> WIC
            <input
            type="radio"
            name="assistance"
            value={inputs.assistance} 
            onChange={handleChange}
            required /> Both
            <input
            type="radio"
            name="assistance"
            value={inputs.assistance} 
            onChange={handleChange}
            required /> None
        </label>
        <br></br>
        <label>
           Do you live in public housing? {/* radio buttons */}
           <input
            type="radio"
            name="housing"
            value={inputs.housing} 
            onChange={handleChange}
            required /> Yes
            <input
            type="radio"
            name="housing"
            value={inputs.housing} 
            onChange={handleChange}
            required /> No
            </label>
            <br></br>
        <input type="submit" />
    </form>
  )
}
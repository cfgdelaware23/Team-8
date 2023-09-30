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
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your full name: 
      <input 
        type="text" 
        name="name" 
        value={inputs.name || ""} 
        onChange={handleChange}
      />
      </label><br></br>
      <label>Enter cellphone number: 
        <input 
          type="number" 
          name="number" 
          value={inputs.number || ""} 
          onChange={handleChange}
        />
        </label>
        <br></br>
        <label>
           Are you enrolled in an assistance program? {/* radio buttons */}
           <input
            name="assistance"
            type="radio"
            value={inputs.assistance} 
            onChange={handleChange}
            required /> SNAP
            <input
            name="assistance"
            type="radio"
            value={inputs.assistance} 
            onChange={handleChange}
            required /> WIC
            <input
            name="assistance"
            type="radio"
            value={inputs.assistance} 
            onChange={handleChange}
            required /> Both
            <input
            name="assistance"
            type="radio"
            value={inputs.assistance} 
            onChange={handleChange}
            required /> None
        </label>
        <br></br>
        <label>
           Do you live in public housing? {/* radio buttons */}
           <input
            name="housing"
            type="radio"
            value={inputs.housing} 
            onChange={handleChange}
            required /> Yes
            <input
            name="housing"
            type="radio"
            value={inputs.housing} 
            onChange={handleChange}
            required /> No
            </label>
            <br></br>
        <input type="submit" />
    </form>
  )
}
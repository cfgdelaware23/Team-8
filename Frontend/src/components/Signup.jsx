import { useState } from 'react';
import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

export default function Signup() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleAssistance = (event) => {
    if (event.target.value === "SNAP"){
      inputs.assistance = "SNAP"
    }
    else if (event.target.value === "WIC") {
      inputs.assistance = "WIC"
    }
    else if (event.target.value === "both") {
      inputs.assistance = "Both"
    }
    else {
      inputs.assistance = "None"
    }
  }

  const handleHousing = (event) => {
    if (event.target.value === "yes") {
      inputs.housing = "Yes"
    } else {
      inputs.housing = "No"
    }
  };

  const handleInsecurity = (event) => {
    if (event.target.value === "yes") {
      inputs.insecurity = "Yes"
    } else {
      inputs.insecurity = "No"
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Enter your first name: ${inputs.first_name}`)
    console.log(`Enter your last name: ${inputs.last_name}`)
    console.log(`Enter your cellphone number: ${inputs.number}`)
    console.log(`Are you enrolled in an assistance program? ${inputs.assistance}`)
    console.log(`Do you live in public housing? ${inputs.housing}`)
    console.log(`Have you faced food insecurity? ${inputs.insecurity}`)
  }

  return (
    // first name last name
    // phone number
    // primary language - english, español, french
    // Is anyone in the household enrolled in SNAP EBT (formerly "food stamps")?
    // do u live in a housing development?
    // Does anyone in the household visit a free food pantry and/or receive free food from other programs at least once a month?

    <form onSubmit={handleSubmit}>
      <br></br>
      <img src="https://codeforgood.net/wp-content/uploads/2023/09/Wellfare-Logo-1536x304.png" height="50px"/>
      <h1>Member Profile</h1>
      <FormControl varaint="filled">
        <InputLabel htmlFor="component-filled"> First Name</InputLabel>
        <FilledInput
          type="text"
          id="component-outlined"
          name="name"
          defaultValue={inputs.first_name || ""}
          onChange={handleChange}
          required/>
      </FormControl>
      &nbsp;&nbsp;
      <FormControl varaint="filled">
        <InputLabel htmlFor="component-filled"> Last Name</InputLabel>
        <FilledInput
          type="text"
          id="component-outlined"
          name="name"
          defaultValue={inputs.last_name || ""}
          onChange={handleChange}
          required/>
      </FormControl>
      <br></br>
      <br></br>
      <FormControl>
        <InputLabel htmlFor="component-filled">Phone Number</InputLabel>
        <FilledInput
          type="tel"
          id="component-outlined"
          name="number"
          defaultValue={inputs.number || ""}
          onChange={handleChange}
          required/>
      </FormControl>
        <br></br>
        <br></br>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Are you enrolled in an assistance program?</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="assistance-buttons-group"
            onChange={handleAssistance}
          >
            <FormControlLabel value="SNAP" control={<Radio />} label="SNAP" required/>
            <FormControlLabel value="WIC" control={<Radio />} label="WIC" required/>
            <FormControlLabel value="both" control={<Radio />} label="Both" required/>
            <FormControlLabel value="none" control={<Radio />} label="None" required/>
             </RadioGroup> 
        </FormControl>
        <br></br>
        <br></br>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Do you reside in a NYCHA public housing development?</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="housing-buttons-group"
            onChange={handleHousing}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" required/>
            <FormControlLabel value="no" control={<Radio />} label="No" required/>
             </RadioGroup> 
        </FormControl>
        <br></br>
        <br></br>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Have you faced food insecurity?</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="insecurity-buttons-group"
            onChange={handleInsecurity}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" required/>
            <FormControlLabel value="no" control={<Radio />} label="No" required/>
             </RadioGroup> 
        </FormControl>
            <br></br>
            
        <Button type="submit" variant="contained"> Submit </Button>
    </form>
  )
}
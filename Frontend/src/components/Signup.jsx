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
    console.log(`Enter your full name: ${inputs.name}`)
    console.log(`Enter your cellphone number: ${inputs.number}`)
    console.log(`Are you enrolled in an assistance program? ${inputs.assistance}`)
    console.log(`Do you live in public housing? ${inputs.housing}`)
    console.log(`Have you faced food insecurity? ${inputs.insecurity}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <br></br>
      <br></br>      
      <FormControl varaint="filled">
        <InputLabel htmlFor="component-filled"> Name</InputLabel>
        <FilledInput
          type="text"
          id="component-outlined"
          name="name"
          defaultValue={inputs.name || ""}
          onChange={handleChange}
          required/>
      </FormControl>
      <br></br>
      <br></br>
      <FormControl>
        <InputLabel htmlFor="component-filled">Cellphone Number</InputLabel>
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
          <FormLabel id="demo-radio-buttons-group-label">Do you live in public housing?</FormLabel>
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
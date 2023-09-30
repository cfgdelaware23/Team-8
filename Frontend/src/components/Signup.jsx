import { useState } from 'react';
import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export default function Signup() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleLanguage = (event) => {
    if (event.target.value === "english"){
      inputs.language = "English"
    }
    else if (event.target.value === "spanish"){
      inputs.language = "Español"
    }
    else {
      inputs.language = "Français"
    }
  }

  const handleHousing = (event) => {
    if (event.target.value === "yes") {
      inputs.housing = "Yes"
    } else {
      inputs.housing = "No"
    }
  };

  const handleAssistance = (event) => {
    if (event.target.value === "yes") {
      inputs.assistance = "Yes"
    } else {
      inputs.assistance = "No"
    }
  }

  const handleInsecurity = (event) => {
    if (event.target.value === "yes") {
      inputs.insecurity = "Yes"
    } else {
      inputs.insecurity = "No"
    }
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#D63C23",
      },
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Enter your first name: ${inputs.first_name}`)
    console.log(`Enter your last name: ${inputs.last_name}`)
    console.log(`Enter your cellphone number: ${inputs.number}`)
    console.log(`What is your primary language ${inputs.language}`)
    console.log(`Do you live in public housing? ${inputs.housing}`)
    console.log(`Are you enrolled in an assistance program? ${inputs.assistance}`)
    console.log(`Have you faced food insecurity? ${inputs.insecurity}`)
  }

  return (
    // primary language - english, español, french

    <form onSubmit={handleSubmit}>
      <br></br>
      <img src="https://codeforgood.net/wp-content/uploads/2023/09/Wellfare-Logo-1536x304.png" height="50px"/>
      <h1>Member Profile</h1>
      <TextField
          required
          type="text"
          id="standard-required"
          label="First Name"
          name="first_name"
          defaultValue={inputs.first_name || ""}
          onChange={handleChange}
          variant="standard"
        />
        &nbsp;&nbsp;
        <TextField
          required
          type="text"
          id="standard-required"
          label="Last Name"
          name="last_name"
          defaultValue={inputs.last_name || ""}
          onChange={handleChange}
          variant="standard"
        />
      <br></br>
      <br></br>
      <TextField
          required
          type="tel"
          id="standard-required"
          label="Phone Number"
          name="number"
          defaultValue={inputs.number || ""}
          onChange={handleChange}
          variant="standard"
        />
      <br></br>
      <br></br>
      <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">What is your primary language?</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="language-buttons-group"
            onChange={handleLanguage}
          >
            <FormControlLabel value="english" control={<Radio />} label="English" required/>
            <FormControlLabel value="spanish" control={<Radio />} label="Español" required/>
            <FormControlLabel value="french" control={<Radio />} label="Français" required/>
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
          <FormLabel id="demo-radio-buttons-group-label">Is anyone in the household enrolled in SNAP EBT (formerly "food stamps")?</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="assistance-buttons-group"
            onChange={handleAssistance}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" required/>
            <FormControlLabel value="no" control={<Radio />} label="No" required/>
             </RadioGroup> 
        </FormControl>
        <br></br>
        <br></br>
        
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Does anyone in the household visit a free food pantry and/or receive free food from other programs at least once a month?</FormLabel>
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
            
            <ThemeProvider theme={theme}>
              <Button type="submit" variant="contained" color="primary"> Submit </Button>
            </ThemeProvider>
            <br></br>
            <br></br>
            <br></br>
    </form>
  )
}
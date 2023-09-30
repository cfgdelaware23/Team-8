// This page directs to CustomerType.jsx upon submission
import { useState } from 'react';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

export default function Employee() {
    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Enter your full name: ${inputs.full_name}`)
        console.log(`Enter your employee id: ${inputs.id}`)
    }

    const theme = createTheme({
        palette: {
          primary: {
            main: "#D63C23",
          },
        },
      });

    return (
        <div className='employee'>
        <form onSubmit={handleSubmit}>
            <br></br>
                <img src="https://codeforgood.net/wp-content/uploads/2023/09/Wellfare-Logo-1536x304.png" height="50px"/>
                <h1>Employee Profile</h1>
                <TextField
                    required
                    type="text"
                    id="standard-required"
                    label="Full Name"
                    name="full_name"
                    defaultValue={inputs.full_name || ""}
                    onChange={handleChange}
                    variant="standard"
                    />
                    <br></br>
                    <br></br>
                    <TextField
                    required
                    type="number"
                    id="standard-required"
                    label="Employee ID"
                    name="number"
                    defaultValue={inputs.id || ""}
                    onChange={handleChange}
                    variant="standard"
                    />
                    <br></br>
                    <br></br>
                    <ThemeProvider theme={theme}>
                    <Button href="/cust" type="submit" variant="contained" color="primary"> Submit </Button>
                    </ThemeProvider>
            </form>
        </div>

    )
}
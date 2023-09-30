// redirected here from Member b/c user decided to enter code
import { useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

export default function Code() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`The customer's code: ${inputs.code}`)
      }

    const theme = createTheme({
        palette: {
          primary: {
            main: "#D63C23",
          },
        },
      });

    return (
        <form onSubmit={handleSubmit}>
            <br></br>
            <img src="https://codeforgood.net/wp-content/uploads/2023/09/Wellfare-Logo-1536x304.png" height="50px"/>
            <h2>Greetings Bill!</h2>
            <h3>Enter this member's discount code.</h3>
            <TextField
                required
                type="text"
                id="standard-required"
                label="Code"
                name="code"
                defaultValue={inputs.code || ""}
                onChange={handleChange}
                variant="standard"
                />
                &nbsp;&nbsp;
            <ThemeProvider theme={theme}>
              <Button href="/checkout" type="submit" variant="contained" color="primary"> Submit </Button>
              {/* upon click display message like: "Bob recieves 40% off on each purchase. Today he saved $16.88" */}
            </ThemeProvider>
        </form>
    )

}
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button'

export default function Member() {
    
  const sendToCode = (event) => {
    event.preventDefault();
    console.log('succesfully submitted')
    // send user to Code.jsx page
  }

  const sendToScan = (event) => {
    event.preventDefault();
    console.log('succesfully submitted')
    // send user to Scan.jsx page
  }
  
    const theme = createTheme({
        palette: {
          primary: {
            main: "#D63C23",
          },
        },
      });

    return (
      <form>
            <br></br>
            <img src="https://codeforgood.net/wp-content/uploads/2023/09/Wellfare-Logo-1536x304.png" height="50px"/>
            <h2>Greetings Bill!</h2>
            <h3>How would our member like to activate their discount?</h3>
            <ThemeProvider theme={theme}>
              <Button onClick={sendToCode} variant="contained" color="primary"> Enter Code </Button>
            <br></br>
            <br></br>
            </ThemeProvider><ThemeProvider theme={theme}>
              <Button onClick={sendToScan} variant="contained" color="primary"> Scan Card </Button>
            </ThemeProvider>
        </form>
    )
}
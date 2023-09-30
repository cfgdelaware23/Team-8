import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button'

export default function Nonmember() {
  
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
            <h3>Offer the customer a membership.</h3>
            <ThemeProvider theme={theme}>
              <Button href="/signup" variant="contained" color="primary"> Signup </Button>
              {/* onclick they should be sent to Signup.jsx */}
            <br></br>
            <br></br>
            </ThemeProvider><ThemeProvider theme={theme}>
              <Button variant="contained" color="primary"> Checkout as guest </Button>
              {/* onclick they should be sent to Guest.jsx */}
            </ThemeProvider>
        </form>
    )
}
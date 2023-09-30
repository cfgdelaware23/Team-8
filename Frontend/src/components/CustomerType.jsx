// This page is where the employee is sent after sigining in
import logo from '../assets/load.gif'
import { useState } from 'react';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button'

export default function CustomerType() {
    
  const sendToMember = (event) => {
    event.preventDefault();
    console.log('succesfully submitted')
    // send user to Member.jsx page
  }

  const sendToNonmember = (event) => {
    event.preventDefault();
    console.log('succesfully submitted')
    // send user to Nonmember.jsx page
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
            <h3>What type of customer are you serving?</h3>
            <ThemeProvider theme={theme}>
              <Button onClick={sendToMember} variant="contained" color="primary"> Member </Button>
            <br></br>
            <br></br>
            </ThemeProvider><ThemeProvider theme={theme}>
              <Button onClick={sendToNonmember} variant="contained" color="primary"> Non-member </Button>
            </ThemeProvider>
        </form>
    )
}
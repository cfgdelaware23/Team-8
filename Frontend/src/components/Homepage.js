import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function Homepage() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
         <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://static.wixstatic.com/media/be7cda_0d951e892f4740548ce83b8a6dfd086c~mv2.jpg/v1/fill/w_440,h_660,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dfuns%202022-04-25%20163242_549_JPG.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#FBEBDB',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5"
                sx={{
                    marginTop: 10,
                    fontSize: 40, // Adjust the font size
                    fontWeight: 'bold', // Set font weight to bold
                    color: '#D63C23', // Set text color
                    marginBottom: 10, // Set bottom margin
                  }}
            >
                Welcome to Wellfare
                  

            </Typography>
            <Box sx={{ mt: 5 }}>
              <Button
                variant="contained"
                fullWidth
                sx={{ borderRadius: 50, backgroundColor: '#D63C23', marginBottom: 10, }}

              >
                Login
              </Button>
              <Button
                variant="contained"
                fullWidth
                sx={{ borderRadius: 50, backgroundColor: '#D63C23', marginBottom: 10, }}
              >
                Sign Up
              </Button>
              <Button
                variant="contained"
                fullWidth
                sx={{ borderRadius: 50, backgroundColor: '#6F96A3', marginBottom: 10, }}
              >
                Admin Log In
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

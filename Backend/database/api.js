const express = require('express');
const app = express();
console.log('HELLLO');


const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));


// Import and mount the signUpRouter
const signUpRouter = require('./signUpRouter.js');
app.use('/signup', signUpRouter);

//Import and mount the profileRouter
const profileRouter = require('./profileRouter.js');
app.use('/profile', profileRouter);

console.log('HELLLO');

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

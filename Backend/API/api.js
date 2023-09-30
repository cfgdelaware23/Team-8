const express = require('express');
const app = express();

const { getElementById, getIndexById, updateElement,
  seedElements, createElement } = require('./utils');

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));


// Import and mount the signUpRouter
const signUpRouter = require('./signUpRouter.js');
app.use('/signup', signUpRouter);

//Import and mount the profileRouter
const profileRouter = require('./profileRouter.js');
app.use('/profile', profileRouter);



app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

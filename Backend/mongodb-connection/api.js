const express = require('express');
const app = express();
console.log('HELLLO');
const router = express.Router();
const mongoose = require("mongoose");

const cors = require('cors');
const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.json());

app.use(cors());
// Import and mount the signUpRouter
//const signUpRouter = require('./signUpRouter.js');
//app.use('/signup', signUpRouter);

//Import and mount the profileRouter
//const profileRouter = require('./profileRouter.js');
//app.use('/profile', profileRouter);

console.log('HELLLO');

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
const uri = "mongodb+srv://dpcode:dpcode@codeforgood.wnptfp0.mongodb.net/?retryWrites=true&w=majority";
async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {

    console.error(error);
  }
}
connect();
const CodeForGood = require('/Users/petrovikj/Desktop/github/Team-8/Backend/mongodb-connection/codeforgood1.js');

// Handle form submission
app.post('/submit', async (req, res) => {
  try {
    const formData = req.body; // Assuming you're using body-parser middleware
    const newEntry = new CodeForGood(formData);
    await newEntry.save();
    res.status(201).json({ message: 'Form data saved successfully.' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Example usage:
// disableCourse(123); // Pass the course ID as an argument.
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});



module.exports = router;

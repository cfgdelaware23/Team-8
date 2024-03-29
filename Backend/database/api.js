const express = require('express');
const app = express();
console.log('HELLLO');
const router = express.Router();


const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));


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

const CodeForGood = require('./Users/dpetrovikj/Desktop/github/Team-8/Backend/mongodb-connection/codeforgood1.js');

// Handle form submission
router.post('/submit', async (req, res) => {
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

module.exports = router;

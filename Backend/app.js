const express = require('express');
const app = express();


//SQL database
const profile = {
   customerId: 1234,
   name: 'Jane Doe',
   income: 20000,
   householdSize: 4,
   age: 35,
   employedStatus: false,
   accessibilityPrograms: true, // temporary until we figure out format 
   streetAddress: '250 Church Street',
   city: 'New York',
   state: 'New York'        
};
          
//Port
const PORT = process.env.PORT || 4001;


app.get('/', function (req, res) {
   // Config your database credential
   const config = {
       userId: 'SA',
       password: 'Your_Password',
       server: 'localhost',
       database: 'geek'
   };
   // Connect to your database
   mssql.connect(config, function (err) {
       // Create Request object to perform
       // query operation
       let request = new mssql.Request();
       // Query to the database and get the records
       request.query('select * from student',
           function (err, records) {
               if (err) console.log(err)
               // Send records as a response
               // to browser
               res.send(records);
           });
   });
});


//Listening
app.listen(PORT, () => {
   console.log(`Server is listening on ${PORT}`);
 });

const express = require('express');

const { getElementById, getIndexById, updateElement,
seedElements, createElement } = require('./utils');


//NEED Dummy database
const persons = [
    {
        name: 'Jane Doe',
        cellphone: '123-456-789',
        programs: 1,
        housing: true,
        foodInsecurity: true
}

]

signUpRouter = express.Router();

//Decides Programs
function programChoice(choice){
    if(0){
        return 'SNAP';
    }else if(1){
        return 'WIC';
    }else if(2){
        return 'Both';
    }else{
        return 'None';
    }
}

//Create Person
function createPerson(info){
    return {
        id: 1,
        name: info.param1,
        cellphone: info.param2,
        programs: programChoice(info.param3),
        housing: info.param4,
        foodInsecurity: info.param5

    }
}
// Create a person
expressionsRouter.post('/', (req, res, next) => {
    persons.push(createPerson(req.query));
    res.status(201).send();
});



module.exports = signUpRouter;
const express = require('express');


//NEED Dummy database
const persons = [
    {   
        id: 1,
        name: 'Jane Doe',
        cellphone: '123-456-789',
        programs: 'BOTH',
        housing: true,
        foodInsecurity: true,
        code: 'XWOI',
        savings: '26.3'
}
]


profileRouter = express.Router();

profileRouter.get('/', (req,res,next) => {
    return persons[0];
});


module.exports = profileRouter;
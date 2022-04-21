const express=require('express');
const router = express.Router();

const questionController = require('./controllers/questionController');


router.get('/question/:id', questionController.findByPk);


module.exports=router;
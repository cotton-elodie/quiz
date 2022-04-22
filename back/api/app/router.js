const express = require("express");
const router = express.Router();

const questionController = require("./controllers/questionController");

router.get("/question/:id", questionController.findByPk);
router.get("/questions",  questionController.findAll);


module.exports = router;

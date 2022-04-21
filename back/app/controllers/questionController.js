const { findAll } = require("../models/question");
const questionMapper = require("../models/question");

const questionController = {
  // Méthode d'affichage d'une question et de ses réponses

  async findByPk(req, res) {
    const { id } = req.params;
    const question = await questionMapper.findByPk(id);

    const answers = await questionMapper.loadQuestionAnswers(id);

    return res.json({ question: question, answers: answers }).status(200);
  },
};

module.exports = questionController;

const questionMapper = require("../models/question");

const questionController = {
  // Méthode d'affichage d'une question et de ses réponses
  async findByPk(req, res) {
    const { id } = req.params;
    const question = await questionMapper.findByPk(id);

    const answers = await questionMapper.findByPk(id);

    return res.json(question, answers).status(200);
  },
};

module.exports = questionController;

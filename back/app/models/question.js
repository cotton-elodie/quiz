const database = require("./database");

const questionMapper = {
  // Permet d'afficher la question par son id
  async findByPk(id) {
    const questionId = Number(id);

    const result = await database.query(
      `SELECT * FROM "question" 
          WHERE "id" = ${questionId}`
    );

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows[0];
  },
// permet d'afficher la liste des réponses de la question
  async loadQuestionAnswers(id) {
    const questionId = Number(id);

    const result = await database.query(
      `SELECT * FROM "answer" 
          WHERE "questionId" = ${questionId}`
    );

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows;
  },
};

module.exports = questionMapper;

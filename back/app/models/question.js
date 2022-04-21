const database = require("./database");

const questionMapper = {
  async findByPk(id) {
    const questionId = Number(id);

    const result = await database.query(
      `SELECT * FROM "question" 
          WHERE "id" = ${questionId}`,
    );

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows[0];
  },
};

module.exports = questionMapper;
const database = require(./database.js);

const questionMapper = {

    async findByPk(id){
        const questionID = Number(id);
        const result = await database.query (
            `SELECT "question" FROM id WHERE 
            `
        )
    }
}
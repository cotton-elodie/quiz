const mainController = {
  homePage: async (req, res) => {
    try {
      const questions = await question.findAll({
        include: ["description"],
      });
      res.render("index", { questions });
    } catch (err) {
      console.trace(err);
      res.status(500).send(err.message);
    }
  },

  error404: (req, res) => {
    res.render("404");
  },
};

module.exports = mainController;

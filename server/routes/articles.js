const express = require("express");
const router = express.Router();

module.exports = (db) => {
  /* GET articles */
  router.get("/articles", (req, res) => {
    const query = {
      text: "SELECT * FROM articles;",
    };

    db.query(query)
      .then((result) => res.json(result))
      .catch((err) => console.log(err));
  });

  return router;
};

const express = require("express");
const router = express.Router();

module.exports = (db) => {
  /* GET articles */
  router.get("/", (req, res) => {
    const query = {
      text: "SELECT *, to_char(date_published, 'MM/DD/YYYY') FROM articles;",
    };

    db.query(query)
      .then((result) => res.json(result))
      .catch((err) => console.log(err));
  });

  return router;
};

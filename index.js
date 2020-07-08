const express = require("express");

const app = express(); //generates a new express application

//create route handler
app.get("/", (req, res) => {
  res.send({ hi: "Love!!!" });
});

/*
 *  To read dynamic port from heroku.
 *  Whenever Heroku runs or application it has
 *  the ability to inject what are called environment variables.
 *  Defaulted to 5000 for dev env
 */
const PORT = process.env.PORT || 5000;
app.listen(PORT);

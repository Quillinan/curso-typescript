import express from "express";

const app = express();

app.get("/health", (req, res) => res.status(200).send("I'm Ok!"));

app.get("/today", (req, res) => {
  res.status(200).send({
    today: new Date().toLocaleDateString("pt-br"),
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});

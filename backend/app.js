const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");

const app = express();
const mongoClient = mongodb.MongoClient;
let db;

async function connect() {
  const client = await mongoClient.connect("mongodb://localhost:27017");
  db = client.db("college");
}

app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
  const type = req.body.login;
  const auth = await db
    .collection(type)
    .find({ name: req.body.name, password: req.body.password })
    .toArray();

  console.log(auth);
  if (auth.length) res.json({ message: "Logged In" });
  else res.json({ message: "Not authenticate" });
});

app.post("/questions", async (req, res) => {
  const question = req.body.question;
  const answers = req.body.answers;
  const correct = req.body.correct;

  await db
    .collection("question")
    .insertOne({ question: question, answers: answers, correct: correct });

  res.json({ message: "Questions added" });
});

app.get("/questions/all", async (req, res) => {
  const response = await db.collection("question").find().toArray();

  res.json(JSON.stringify(response));
});

connect().then(() => {
  app.listen(3001);
  console.log("server on");
});

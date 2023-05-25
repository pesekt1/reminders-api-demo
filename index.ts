import express from "express";
import remindersRouter from "./routers/reminders";
import cors from "cors";

const app = express();
app.use(cors()); //use cors to allow cross-origin requests

app.use(express.json()); //for express so that it parses incoming request bodies.
app.use("/todos", remindersRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(8000, () => console.log("Server started"));

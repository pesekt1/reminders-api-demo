import express from "express";
import remindersRouter from "./routers/reminders";
import todosRouter from "./routers/todos";
import cors from "cors";
import dbConnect from "./startup/db";

dbConnect(); //connect to database

const app = express();
app.use(cors()); //use cors to allow cross-origin requests

app.use(express.json()); //for express so that it parses incoming request bodies.
app.use("/reminders", remindersRouter);
app.use("/todos", todosRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT ?? 8000, () => console.log("Server started"));

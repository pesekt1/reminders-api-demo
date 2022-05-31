import express from "express";
import remindersRouter from "./routers/reminders";

const app = express();

app.use(express.json()); //for express so that it parses incoming request bodies.
app.use("/reminders", remindersRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(8000, () => console.log("Server started"));

import { Router } from "express";
import CreateReminderDto from "../dtos/CreateReminderDto";
import Todo from "../models/todo";

const router = Router(); //returns a router

router.get("/", (req, res) => {
  Todo.find()
    .sort("-date")
    .then((todos) => res.send(todos))
    .catch((err) => res.status(500).send(err));
});

router.post("/", (req, res) => {
  const { title } = req.body as CreateReminderDto;
  const todo = new Todo({
    title,
  });
  todo
    .save()
    .then((todo) => res.status(201).send(todo))
    .catch((err) => res.status(500).send(err));
});

router.delete("/:id", (req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then((todo) => {
      if (todo) {
        return res.status(200).send(todo);
      }
      res.status(404).send("Todo not found");
    })
    .catch((err) => res.status(500).send(err));
});

export default router;

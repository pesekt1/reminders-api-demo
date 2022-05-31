import { Router } from "express";
import CreateReminderDto from "../dtos/CreateReminderDto";
import Reminder from "../models/reminder";

const router = Router(); //returns a router

const reminders: Reminder[] = [];

router.get("/", (req, res) => {
  res.send(reminders);
});

router.post("/", (req, res) => {
  const { title } = req.body as CreateReminderDto;
  const reminder = new Reminder(title);
  reminders.push(reminder);
  res.status(201).send(reminder);
});

export default router; //export the router object

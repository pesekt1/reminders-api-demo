import { Router } from "express";
import CreateReminderDto from "../dtos/CreateReminderDto";

const router = Router(); //returns a router
router.get("/", (req, res) => {
  res.send("lsit of reminders");
});

router.post("/", (req, res) => {
  const { title } = req.body as CreateReminderDto;
  res.json(title);
});

export default router; //export the router object

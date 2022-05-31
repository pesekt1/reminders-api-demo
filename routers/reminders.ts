import { Router } from "express";

const router = Router(); //returns a router
router.get("/", (req, res) => {
  res.send("lsit of reminders");
});

export default router; //export the router object

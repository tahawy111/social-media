import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json("Hey Welcome");
});

export default router;

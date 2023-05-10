import { Router } from "express";

const router = Router();

router.get("/movies", (_req, res) => {
  res.send("Hello World!");
});

export { router as movieRouter };

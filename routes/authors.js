import { Router } from "express";

const authorRouter = Router();

authorRouter.get("/", (_req, res) => res.send("All authors"));
authorRouter.get("/:authorId", (req, res) => {
  const { authorId } = req.params;
  res.send(`Author ID: ${authorId}`);
});

export default authorRouter;

import { Router } from "express";
import { getAuthorById } from "../controllers/authors.js";

const authorRouter = Router();

authorRouter.get("/", (_req, res) => res.send("All authors"));
authorRouter.get("/:authorId", getAuthorById);

export default authorRouter;

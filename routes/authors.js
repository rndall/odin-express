import { Router } from "express";
import { getAuthors, getAuthorById } from "../controllers/authors.js";

const authorRouter = Router();

authorRouter.get("/", getAuthors);
authorRouter.get("/:authorId", getAuthorById);

export default authorRouter;

import { Router } from "express";
import { getIndex, getAbout } from "../controllers/index.js";

const indexRouter = Router();

indexRouter.get("/", getIndex);
indexRouter.get("/about", getAbout);
indexRouter.get("/contact", (_req, res) => res.send("Get contact"));
indexRouter.post("/contact", (_req, res) => res.send("Post contact"));

export default indexRouter;

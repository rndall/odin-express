import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/", (_req, res) => res.send("Index"));
indexRouter.get("/about", (_req, res) => res.send("About"));
indexRouter.get("/contact", (_req, res) => res.send("Get contact"));
indexRouter.post("/contact", (_req, res) => res.send("Post contact"));

export default indexRouter;

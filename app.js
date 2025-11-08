import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import authorRouter from "./routes/authors.js";
import bookRouter from "./routes/books.js";
import indexRouter from "./routes/index.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ejs
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});

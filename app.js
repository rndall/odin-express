import express from "express";
import authorRouter from "./routes/authors.js";
import bookRouter from "./routes/books.js";
import indexRouter from "./routes/index.js";

const app = express();

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});

import db from "../db.js";
import CustomNotFoundError from "../errors/CustomNotFoundError.js";

async function getAuthors(_req, res) {
  const authors = await db.getAuthors();

  if (!authors) {
    throw new CustomNotFoundError("Authors not found");
  }

  res.json(authors);
}

async function getAuthorById(req, res) {
  const { authorId } = req.params;

  const author = await db.getAuthorById(Number(authorId));

  if (!author) {
    throw new CustomNotFoundError("Author not found");
  }

  res.send(`Author Name: ${author.name}`);
}

export { getAuthors, getAuthorById };

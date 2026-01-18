const express = require("express");
const router = express.Router();
const { Author, Post } = require("../models");

// CREATE
router.post("/", async (req, res) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json(author);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET ALL
router.get("/", async (req, res) => {
  const authors = await Author.findAll();
  res.json(authors);
});

// GET ONE
router.get("/:id", async (req, res) => {
  const author = await Author.findByPk(req.params.id);
  if (!author) return res.status(404).json({ error: "Not found" });
  res.json(author);
});

// GET POSTS FOR A SPECIFIC AUTHOR
router.get("/:id/posts", async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id, {
      include: Post
    });

    if (!author) {
      return res.status(404).json({ error: "Not found" });
    }

    res.json(author.Posts);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  const author = await Author.findByPk(req.params.id);
  if (!author) return res.status(404).json({ error: "Not found" });
  await author.update(req.body);
  res.json(author);
});

// DELETE
router.delete("/:id", async (req, res) => {
  const author = await Author.findByPk(req.params.id);
  if (!author) return res.status(404).json({ error: "Not found" });
  await author.destroy();
  res.json({ message: "Deleted" });
});

module.exports = router;

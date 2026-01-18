const express = require("express");
const router = express.Router();
const { Post, Author } = require("../models");

// CREATE
router.post("/", async (req, res) => {
  try {
    const { title, content, author_id } = req.body;

    // ✅ Explicit validation for author existence
    const author = await Author.findByPk(author_id);
    if (!author) {
      return res.status(404).json({ error: "Author not found" });
    }

    const post = await Post.create({ title, content, author_id });
    res.status(201).json(post);

  } catch (error) {
    res.status(500).json({ error: "Failed to create post" });
  }
});

// GET ALL (with optional filtering)
router.get("/", async (req, res) => {
  const posts = await Post.findAll({
    where: req.query.author_id ? { author_id: req.query.author_id } : {}
  });
  res.json(posts);
});

// GET ONE (with author info)
router.get("/:id", async (req, res) => {
  const post = await Post.findByPk(req.params.id, { include: Author });
  if (!post) return res.status(404).json({ error: "Not found" });
  res.json(post);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  if (!post) return res.status(404).json({ error: "Not found" });
  await post.update(req.body);
  res.json(post);
});

// DELETE
router.delete("/:id", async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  if (!post) return res.status(404).json({ error: "Not found" });
  await post.destroy();
  res.json({ message: "Deleted" });
});

module.exports = router;

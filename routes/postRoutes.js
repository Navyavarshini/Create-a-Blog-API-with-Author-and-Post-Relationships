const express = require("express");
const router = express.Router();
const { Post, Author } = require("../models");

// CREATE
router.post("/", async (req, res) => {
  const post = await Post.create(req.body);
  res.status(201).json(post);
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

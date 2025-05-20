const express = require('express');
const router = express.Router();
const Project = require('../models/projectModel');

// GET all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch projects", error });
  }
});

// POST (for testing/admin panel use)
router.post('/', async (req, res) => {
  const { name, description, image, link, githubUrl, tags } = req.body;

  try {
    const newProject = new Project({
      name,
      description,
      image,
      link,
      githubUrl,
      tags,
    });

    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: "Failed to create project", error });
  }
});

module.exports = router;

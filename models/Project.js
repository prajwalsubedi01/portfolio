const mongoose = require('mongoose');

// Define the project schema
const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String, // Image URL or path to the image
    required: true,
  },
  link: {
    type: String, // Link to the project (optional)
    required: true, // Make it required so that every project has a link
  }
}, { timestamps: true }); // Timestamps will automatically add 'createdAt' and 'updatedAt'

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;

const mongoose = require('mongoose');

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
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  githubUrl: {
    type: String,
    required: false,
  },
  tags: {
    type: [String],
    default: [],
  }
}, { timestamps: true });

// Auto-lowercase tags
projectSchema.pre('save', function (next) {
  if (this.tags && Array.isArray(this.tags)) {
    this.tags = this.tags.map(tag => tag.toLowerCase());
  }
  next();
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;

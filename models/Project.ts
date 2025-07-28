import { Schema, model, models } from "mongoose";

const ProjectSchema: Schema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: {
    type: String,
    required: true,
    enum: ["Frontend", "Backend", "Fullstack", "DevOps", "Mobile", "Other"], // optional validation
  },
  programmingLanguages: {
    type: [String],
    required: true,
  },
  frameworksAndLibraries: {
    type: [String],
    required: true,
  },
  databaseTechnologies: {
    type: [String],
    required: true,
  },
  image: {
    type: String, // single image name or path
    required: true,
  },
  url: { type: String, required: true },
  featured: { type: Boolean, required: true, default: false },
});

const Project = models.Project || model("Project", ProjectSchema);

export default Project;

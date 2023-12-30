import mongoose from "mongoose";

const NotesSchema = new mongoose.Schema({
  semester: {
    type: String,
    enum: ["PRIMEIRO", "SEGUNDO", "TERCEIRO", "QUARTO"],
    required: true,
  },
  subject: {
    type: String,
    enum: ["Biologia", "Artes", "Geografia", "Sociologia"],
    required: true,
  },
  grade: {
    type: Number,
    required: true,
    min: 0,
    max: 10,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Notes = mongoose.model("Notes", NotesSchema);

export default Notes;

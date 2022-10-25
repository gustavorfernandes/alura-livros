import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { type: String, required: true },
  autor: { type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true },
  editora: { type: String, required: true },
  numPaginas: { type: Number }
});

export const livros = mongoose.model("livros", livroSchema);

// 63583e607caf998c59d55fef
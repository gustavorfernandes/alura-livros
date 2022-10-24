import express from "express";
import { LivroController } from "../controllers/livrosController.js";

export const livrosRouter = express.Router();

livrosRouter
  .get("/livros", LivroController.listarLivros)
  .get("/livros/:id", LivroController.pesquisarLivro)
  .post("/livros", LivroController.cadastrarLivro)
  .put("/livros/:id", LivroController.atualizarLivro)
  .delete("/livros/:id", LivroController.excluirLivro)
;
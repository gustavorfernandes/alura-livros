import express from "express";
import { livrosRouter } from "./livrosRoutes.js";
import { autoresRouter } from "./autoresRoutes.js";

export const routes = app => {
  app.route("/").get((req, res) => {
    res.status(200).send({
      server: "Alura Livros",
      endpoints: {
        livros: "https://alura-livros.herokuapp.com/livros",
        autores: "https://alura-livros.herokuapp.com/autores"
      }
    })
  })

  app.use(
    express.json(),
    livrosRouter,
    autoresRouter
  )
}

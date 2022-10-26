import express from "express";
import { livrosRouter } from "./livrosRoutes.js";
import { autoresRouter } from "./autoresRoutes.js";

export const routes = app => {
  app.route("/").get((req, res) => {
    res.status(200).send({
      server: "Livraria Alura",
      endpoints: {
        livros: "/livros",
        autores: "/autores"
      }
    })
  })

  app.use(
    express.json(),
    livrosRouter,
    autoresRouter
  )
}

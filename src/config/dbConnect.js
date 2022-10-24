import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Gustavo:2022Aexplosao.@cluster.t9srhja.mongodb.net/alura-livros");

export let db = mongoose.connection;

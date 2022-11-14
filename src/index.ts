import express from "express";
import dotenv from "dotenv";

import { setupDb } from "./db/setup-db";
import userRout from "./routs/user"

setupDb();
dotenv.config();

const PORT = process.env.PORT || 8000;
const app = require("express")();
const server = require("http").createServer(app);

// Add headers before the routes are defined
// app.use(function (req, res, next) {
//     res.set({
//         // "Content-Type": "application/json",
//         // "Access-Control-Allow-Origin": "http://127.0.0.1:3000"
//     });
//     next();
// });

app.use(express.json());
app.use("/", userRout);

server.listen(PORT, () => console.log(`server is running on port ${PORT}`));

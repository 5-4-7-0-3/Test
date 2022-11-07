import express from "express";
import dotenv from "dotenv";

import { setupDb } from "./db/setup-db";

dotenv.config();

const app = express();
const port = process.env.PORT;
setupDb();

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.listen(port, () => console.log(`Running on port ${port}`));

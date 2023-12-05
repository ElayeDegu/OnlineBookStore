import express from "express";
import { createConnection } from "typeorm";

import { BookController } from "./src/controllers/book.controller";
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8000;

// Connect to PostgreSQL database
const dbConfig = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      database: '<YOUR-DATABASE>',
      username: '<YOUR-USERNAME>',
      password: '<YOUR-PASSWORD>',
      entities: ["src/entities/*.ts"],
      synchronize: true,
    });

    console.log("Connected to PostgreSQL database");
  } catch (error) {
    console.log("Error connecting to PostgreSQL database:", error);
  }
};

dbConfig();

app.use(cors());
// Initialize controllers
app.use("/books", BookController);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

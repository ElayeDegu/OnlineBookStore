import express from "express";
const cors = require("cors");
import { createConnection } from "typeorm";
import swaggerUI = require("swagger-ui-express");
const docs = require("./docs");
import { BookController } from "./controllers/book.controller";

const app = express();
const port = process.env.PORT || 8000;

// Connect to PostgreSQL database
const dbConfig = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "Esku2212",
      database: "HypeTest",
      entities: ["src/entities/*.ts"],
      synchronize: true,
    });

    console.log("Connected to PostgreSQL database");
  } catch (error) {
    console.log("Error connecting to PostgreSQL database:", error);
  }
};

dbConfig();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Initialize controllers
app.use("/books", BookController);

// Initialize the swagger
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

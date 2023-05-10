import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

// Routes
import { movieRouter } from "./routes/movie.route";

// Connexion à la base de données
import { connectDB } from "./db/conn";

const app = express();

app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.use("/api", movieRouter);

// Ouverture du serveur
const PORT = 5000;

app.listen(PORT, () =>
  console.log(`Serveur à l'écoute : http://localhost:${PORT}`)
);

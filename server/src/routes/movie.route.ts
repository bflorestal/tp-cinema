import { Router } from "express";

import {
  getAllMovies,
  getMovieById,
  createMovie,
  //   updateMovie,
  deleteMovie,
} from "../controllers/movie.controller";

const router = Router();

router
  .get("/movies", getAllMovies)
  .get("/movies/:id", getMovieById)
  .post("/movies", createMovie)
  //   .put("/movies/:id", updateMovie)
  .delete("/movies/:id", deleteMovie);

export { router as movieRouter };

import { Request, Response } from "express";
import { Movie } from "../models/Movie";

export async function getAllMovies(_req: Request, res: Response) {
  try {
    const movies = await Movie.find();

    return res.status(200).json(movies);
  } catch (err) {
    if (err instanceof Error) console.error(`${err.name}: ${err.message}`);

    return res
      .status(500)
      .json({ message: "Impossible de récupérer les films" });
  }
}

export async function getMovieById(req: Request, res: Response) {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({ message: "Film introuvable" });
    }

    return res.status(200).json(movie);
  } catch (err) {
    if (err instanceof Error) console.error(`${err.name}: ${err.message}`);

    return res.status(500).json({ message: "Impossible de récupérer le film" });
  }
}

export async function createMovie(req: Request, res: Response) {
  try {
    const movie = await Movie.create(req.body);

    return res.status(201).json(movie);
  } catch (err) {
    if (err instanceof Error) console.error(`${err.name}: ${err.message}`);

    return res.status(500).json({ message: "Impossible de créer le film" });
  }
}

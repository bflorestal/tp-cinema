import { Schema, model } from "mongoose";

interface IMovie {
  title: string;
  synopsis: string;
  posterUrl: string;
  releaseDate: Date;
  characters: string[];
  director: string;
  studio: string;
  genres: string[];
  duration: number;
}

const movieSchema = new Schema<IMovie>({
  title: { type: String, required: true, minlength: 2, maxlength: 200 },
  synopsis: { type: String, required: true, minlength: 2, maxlength: 1000 },
  posterUrl: { type: String, required: true, minlength: 2, maxlength: 200 },
  releaseDate: { type: Date, required: true },
  characters: { type: [String], required: true, minlength: 1, maxlength: 200 },
  director: { type: String, required: true, minlength: 2, maxlength: 200 },
  studio: { type: String, required: true, minlength: 2, maxlength: 200 },
  genres: { type: [String], required: true, minlength: 2, maxlength: 200 },
  duration: { type: Number, required: true, min: 1, max: 1000 },
});

export const Movie = model<IMovie>("Movie", movieSchema);
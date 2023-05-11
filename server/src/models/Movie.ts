import { Schema, model } from "mongoose";

export interface IMovie {
  title: string;
  synopsis: string;
  posterUrl: string;
  releaseDate: Date;
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
  director: { type: String, required: true, minlength: 2, maxlength: 200 },
  studio: { type: String, required: true, minlength: 2, maxlength: 200 },
  genres: { type: [String], required: true, minlength: 2, maxlength: 200 },
  duration: { type: Number, required: true, min: 1, max: 1000 },
});

export const Movie = model<IMovie>("Movie", movieSchema);

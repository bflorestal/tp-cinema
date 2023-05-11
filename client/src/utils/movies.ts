// Import du type défini dans le serveur
import type { IMovie as Movie } from "../../../server/src/models/Movie";

export interface MovieWithId extends Movie {
  _id: string;
  __v: number;
}

export interface MovieInput extends Omit<Movie, "releaseDate"> {
  releaseDate: string;
}

const API_URL = import.meta.env.VITE_API_URL;

export async function getAllMovies() {
  try {
    const res = await fetch(`${API_URL}/movies`);
    const data = await res.json();

    return data as MovieWithId[];
  } catch (err) {
    console.error(err);

    return [];
  }
}

export async function getMovieById(id: number) {
  try {
    const res = await fetch(`${API_URL}/movies/${id}`);
    const data = await res.json();

    return data as MovieWithId;
  } catch (err) {
    console.error(err);

    return null;
  }
}

export async function createMovie(movie: MovieInput) {
  try {
    const res = await fetch(`${API_URL}/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function updateMovie(id: number, movie: Movie) {
  try {
    const res = await fetch(`${API_URL}/movies/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function deleteMovie(id: number) {
  try {
    const res = await fetch(`${API_URL}/movies/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

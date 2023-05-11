import { useEffect, useState } from "react";
import Layout from "../components/Layout";

import { getAllMovies, type MovieWithId } from "../utils/movies";
import { MovieCard } from "../components/MovieCard";
import { Link } from "react-router-dom";

export default function Movies() {
  const [movies, setMovies] = useState<MovieWithId[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getAllMovies();
      setMovies(movies);
    };

    fetchMovies();
  }, []);

  return (
    <Layout>
      <section className="container flex flex-col items-center justify-center py-8">
        <h1 className="text-3xl font-bold text-center">Films</h1>
        <div className="py-8">
          <Link to="/movies/add" className="btn btn-primary">
            Ajouter un film
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center">
          {movies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

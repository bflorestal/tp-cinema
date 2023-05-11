import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";

import { type MovieWithId, getMovieById, deleteMovie } from "../utils/movies";

import { LoadingSpinner } from "../components/Loading";
// import { UpdateMovieModal } from "../components/Modal";

export default function MoviePage() {
  const [movie, setMovie] = useState<MovieWithId | null>(null);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!movie) return;
    if (confirm("Voulez-vous vraiment supprimer ce film ?") === false) return;

    const res = await deleteMovie(movie._id);

    if (res._id) navigate("/movies");
  };

  useEffect(() => {
    console.log("id", id);

    const fetchMovie = async () => {
      if (!id) return;
      const movie = await getMovieById(id);
      setMovie(movie);
    };

    fetchMovie();
  }, [id]);

  return (
    <Layout>
      <section className="container flex flex-col items-center justify-center py-8">
        {!movie ? (
          <LoadingSpinner />
        ) : (
          <>
            <div className="flex">
              <div className="flex-1 flex flex-col space-y-8 items-center">
                <h1 className="text-3xl font-bold text-center">
                  {movie.title}
                </h1>
                <img src={movie.posterUrl} alt={movie.title} className="h-96" />
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h2 className="text-2xl font-bold">Synopsis</h2>
                  <p className="">{movie.synopsis}</p>
                </div>
                <div className="flex justify-between gap-x-2 max-w-lg">
                  <div>
                    <h3 className="text-xl font-bold">Date de sortie</h3>
                    <p>{new Date(movie.releaseDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Directeur</h3>
                    <p>{movie.director}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Studio</h3>
                    <p>{movie.studio}</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Genres</h3>
                  <ul className="list-disc list-inside">
                    {movie.genres.map((genre) => (
                      <li key={genre}>{genre}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Durée</h3>
                  <p>{movie.duration} minutes</p>
                </div>
                <div className="flex gap-x-4">
                  <label htmlFor="my-modal-3" className="btn btn-accent">
                    Modifier
                  </label>
                  <button onClick={handleDelete} className="btn btn-error">
                    Supprimer
                  </button>
                </div>
              </div>
            </div>

            {/* Modale */}
            {/* <UpdateMovieModal id="my-modal-3" /> */}
          </>
        )}
      </section>
    </Layout>
  );
}

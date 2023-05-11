import { useState } from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

import { createMovie, genres, type MovieInput } from "../utils/movies";

export default function AddMoviePage() {
  const [movie, setMovie] = useState<MovieInput>({
    title: "",
    synopsis: "",
    posterUrl: "",
    releaseDate: "",
    director: "",
    studio: "",
    genres: [],
    duration: 0,
  });
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Envoi du film au serveur
    createMovie(movie)
      .then((movie) => {
        // Redirection vers la page du film
        navigate(`/movies/${movie._id}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Layout>
      <section className="container flex flex-col items-center justify-center py-8">
        <div className="w-full max-w-2xl">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-4">
            <h1 className="text-3xl font-bold text-center">Ajouter un film</h1>
            {/* Titre */}
            <div className="form-control w-full">
              <label htmlFor="title" className="label">
                <span className="label-text font-bold">Titre</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                min={2}
                max={200}
                value={movie.title}
                onChange={(e) => setMovie({ ...movie, title: e.target.value })}
                required={true}
                className="input input-bordered w-full"
              />
            </div>
            {/* Synopsis */}
            <div className="form-control">
              <label htmlFor="synopsis" className="label">
                <span className="label-text font-bold">Synopsis</span>
              </label>
              <textarea
                id="synopsis"
                name="synopsis"
                minLength={2}
                maxLength={1000}
                value={movie.synopsis}
                onChange={(e) =>
                  setMovie({ ...movie, synopsis: e.target.value })
                }
                required={true}
                className="textarea textarea-bordered h-24"
              ></textarea>
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              {/* Poster */}
              <div className="form-control">
                <label htmlFor="posterUrl" className="label">
                  <span className="label-text font-bold">Poster</span>
                </label>
                <input
                  type="url"
                  id="posterUrl"
                  name="posterUrl"
                  placeholder="https://"
                  pattern="https://.*"
                  value={movie.posterUrl}
                  onChange={(e) =>
                    setMovie({ ...movie, posterUrl: e.target.value })
                  }
                  required={true}
                  className="input input-bordered w-full"
                />
              </div>
              {/* Date de sortie */}
              <div className="form-control">
                <label htmlFor="releaseDate" className="label">
                  <span className="label-text font-bold">Date de sortie</span>
                </label>
                <input
                  type="date"
                  id="releaseDate"
                  name="releaseDate"
                  value={movie.releaseDate}
                  onChange={(e) =>
                    setMovie({ ...movie, releaseDate: e.target.value })
                  }
                  required={true}
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              {/* Réalisateur */}
              <div className="form-control">
                <label htmlFor="director" className="label">
                  <span className="label-text font-bold">Réalisateur</span>
                </label>
                <input
                  type="text"
                  id="director"
                  name="director"
                  min={2}
                  max={200}
                  value={movie.director}
                  onChange={(e) =>
                    setMovie({ ...movie, director: e.target.value })
                  }
                  required={true}
                  className="input input-bordered input-sm w-full"
                />
              </div>
              {/* Studio */}
              <div className="form-control">
                <label htmlFor="studio" className="label">
                  <span className="label-text font-bold">Studio</span>
                </label>
                <input
                  type="text"
                  id="studio"
                  name="studio"
                  min={2}
                  max={200}
                  value={movie.studio}
                  onChange={(e) =>
                    setMovie({ ...movie, studio: e.target.value })
                  }
                  required={true}
                  className="input input-bordered input-sm w-full"
                />
              </div>
            </div>
            {/* Genres */}
            <div>
              <span className="label label-text font-bold">Genres</span>
              <div className="flex items-center flex-wrap gap-2 px-1">
                {genres.map((genre, index) => (
                  <label
                    key={index}
                    className="relative flex items-center gap-1 font-bold text-sm"
                  >
                    <input
                      className="checkbox checkbox-sm checkbox-accent"
                      type="checkbox"
                      name="genres"
                      value={genre}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setMovie({
                            ...movie,
                            genres: [...movie.genres, genre],
                          });
                        } else {
                          setMovie({
                            ...movie,
                            genres: movie.genres.filter((g) => g !== genre),
                          });
                        }
                      }}
                    />
                    {genre}
                  </label>
                ))}
              </div>
            </div>
            {/* Durée */}
            <div className="form-control">
              <label htmlFor="duration" className="label">
                <span className="label-text font-bold">Durée</span>
              </label>
              <input
                type="number"
                id="duration"
                name="duration"
                min={1}
                max={1000}
                value={movie.duration}
                onChange={(e) =>
                  setMovie({ ...movie, duration: +e.target.value })
                }
                required={true}
                className="input input-bordered input-sm w-full"
              />
            </div>
            <button type="submit" className="mt-4 btn btn-success mx-auto">
              Ajouter
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

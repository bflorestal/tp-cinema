import { useState } from "react";
import {
  genres as allGenres,
  type MovieWithId,
  updateMovie,
} from "../utils/movies";

interface ModalProps {
  id: string;
  movie: MovieWithId;
}

export function UpdateMovieModal({ id, movie }: ModalProps) {
  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor={id}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <UpdateMovieForm movie={movie} />
        </div>
      </div>
    </>
  );
}

function UpdateMovieForm({ movie }: { movie: MovieWithId }) {
  const [details, setDetails] = useState({
    ...movie,
    releaseDate: new Date(movie.releaseDate).toISOString().split("T")[0],
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(details);

    const res = updateMovie(movie._id, {
      ...details,
      releaseDate: new Date(details.releaseDate),
    });

    // TODO: Trouver une meilleure méthode pour rafraîchir l'interface
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <span className="text-lg font-bold">Modifier le film</span>
      <div className="grid grid-cols-1 gap-x-6 gap-y-2">
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
          {/* Titre */}
          <div className="form-control w-full">
            <label htmlFor="title" className="label">
              <span className="label-text font-bold">Titre</span>
            </label>
            <input
              type="text"
              id="name1"
              name="name1"
              min={2}
              max={70}
              value={details.title}
              onChange={(e) =>
                setDetails({ ...details, title: e.target.value })
              }
              required={true}
              className="input input-bordered input-sm"
            />
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
              value={details.duration}
              onChange={(e) =>
                setDetails({ ...details, duration: parseInt(e.target.value) })
              }
              required={true}
              className="input input-bordered input-sm"
            />
          </div>
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
            value={details.synopsis}
            onChange={(e) =>
              setDetails({ ...details, synopsis: e.target.value })
            }
            required={true}
            className="textarea textarea-bordered h-24"
          ></textarea>
        </div>
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
            value={details.posterUrl}
            onChange={(e) =>
              setDetails({ ...details, posterUrl: e.target.value })
            }
            required={true}
            className="input input-bordered input-sm"
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
            value={details.releaseDate}
            onChange={(e) =>
              setDetails({ ...details, releaseDate: e.target.value })
            }
            required={true}
            className="input input-bordered input-sm"
          />
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
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
              value={details.director}
              onChange={(e) =>
                setDetails({ ...details, director: e.target.value })
              }
              required={true}
              className="input input-bordered input-sm"
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
              value={details.studio}
              onChange={(e) =>
                setDetails({ ...details, studio: e.target.value })
              }
              required={true}
              className="input input-bordered input-sm"
            />
          </div>
        </div>
        {/* Genres */}
        <div>
          <span className="label-text font-bold">Genres</span>
          <div className="flex items-center flex-wrap gap-2 px-1">
            {allGenres.map((genre, index) => (
              <label
                key={index}
                className="relative flex items-center gap-1 font-bold text-sm"
              >
                <input
                  type="checkbox"
                  name="genres"
                  value={genre}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setDetails({
                        ...details,
                        genres: [...details.genres, genre],
                      });
                    } else {
                      setDetails({
                        ...details,
                        genres: details.genres.filter((g) => g !== genre),
                      });
                    }
                  }}
                  checked={details.genres.includes(genre)}
                  className="checkbox checkbox-sm checkbox-accent"
                />
                {genre}
              </label>
            ))}
          </div>
        </div>
      </div>
      <button type="submit" className="btn">
        Modifier
      </button>
    </form>
  );
}

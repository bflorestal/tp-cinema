import { Link } from "react-router-dom";
import { MovieWithId } from "../utils/movies";

export function MovieCard({ movie }: { movie: MovieWithId }) {
  return (
    <article className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={movie.posterUrl} alt={movie.title} className="h-full" />
      </figure>
      <div className="card-body">
        <span className="card-title line-clamp-none md:line-clamp-1">
          {movie.title}
        </span>
        <p className="line-clamp-3">{movie.synopsis}</p>
        <div className="card-actions justify-end">
          <Link to={`/movies/${movie._id}`} className="btn btn-info">
            Détails
          </Link>
        </div>
      </div>
    </article>
  );
}

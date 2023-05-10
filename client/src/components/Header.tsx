import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          TP Cinéma
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/movies">Films</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

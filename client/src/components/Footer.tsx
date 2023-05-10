import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <Link to="/" className="link link-hover">
          Accueil
        </Link>
        <Link to="/movies" className="link link-hover">
          Films
        </Link>
      </div>
      <div>
        <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
      </div>
    </footer>
  );
}

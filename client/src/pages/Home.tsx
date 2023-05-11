import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="container flex flex-col items-center justify-center py-8">
        <div className="space-y-8">
          <h1 className="text-3xl font-bold text-center">TP Cinéma</h1>
          <p className="text-center md:text-xl">
            Bienvenue sur le site de gestion de films !
          </p>
          <div className="space-y-2">
            <p className="">
              Vous pouvez consulter la liste des films sur la page{" "}
              <Link to="/movies" className="text-blue-500 hover:underline">
                Films
              </Link>
              .
            </p>
            <p className="">
              Vous pouvez également ajouter un film en cliquant sur le bouton
              sur cette page. Ce bouton vous redirigera vers la page avec le{" "}
              <Link to="/movies/add" className="text-blue-500 hover:underline">
                formulaire d'ajout
              </Link>
              .
            </p>
          </div>
          <div className="space-y-2">
            <p className="">
              Pour chaque film, vous pouvez consulter les détails en cliquant
              sur le bouton "Détails". Sur la page des détails, vous pouvez
              modifier ou supprimer le film.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

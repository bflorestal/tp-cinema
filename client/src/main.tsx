import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home.tsx";
import Movies from "./pages/Movies.tsx";
import AddMoviePage from "./pages/AddMovie.tsx";
import MoviePage from "./pages/MovieDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/movies/add",
    element: <AddMoviePage />,
  },
  {
    path: "/movies/:id",
    element: <MoviePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

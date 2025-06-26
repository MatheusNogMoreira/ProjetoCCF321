"use client";

import { useEffect, useState } from "react";
import "./Movies.css";
import Link from "next/link";

interface Midia {
  id: number;
  nome_midia: string;
  tipo_midia: string;
  endereco_imagem: string;
}

export default function Movies() {
  const [movies, setMovies] = useState<Midia[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/midias")
      .then((res) => res.json())
      .then((data: Midia[]) => {
        setMovies(data.filter((item) => item.tipo_midia.toLowerCase() === "filmes"));
      })
      .catch((error) => console.error("Erro ao buscar filmes:", error));
  }, []);

  return (
    <main className="pageMovies">
      <h1>Filmes Perdidos</h1>
      <div className="grid">
        {movies.map((movie) => (
          <Link key={movie.id} href={`/midia/${movie.id}`} className="card">
            <img
              src={`http://localhost:3000${movie.endereco_imagem}`}
              alt={movie.nome_midia}
            />
            <h2>{movie.nome_midia}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}

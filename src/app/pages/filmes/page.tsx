"use client";

import { useEffect, useState } from "react";
import Midia_card from "@/app/components/midia_card/Midia_card";
import "./Movies.css";

interface Midia {
  id: number;
  nome_midia: string;
  tipo_midia: string;
  endereco_imagem: string;
  descricao: string;
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
      <h1 className="titulo-centralizado">Filmes Perdidos</h1>
      <div className="grid">
        {movies.map((movie) => (
          <Midia_card key={movie.id} id={movie.id} imagem={movie.endereco_imagem}>
            {movie.nome_midia}
          </Midia_card>
        ))}
      </div>
    </main>
  );
}
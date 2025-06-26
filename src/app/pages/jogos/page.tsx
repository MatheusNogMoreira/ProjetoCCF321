"use client";

import { useEffect, useState } from "react";
import "./Games.css";
import Link from "next/link";

interface Midia {
  id: number;
  nome_midia: string;
  tipo_midia: string;
  endereco_imagem: string;
}

export default function Games() {
  const [games, setGames] = useState<Midia[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/midias")
      .then((res) => res.json())
      .then((data: Midia[]) => {
        setGames(data.filter((item) => item.tipo_midia.toLowerCase() === "jogo"));
      })
      .catch((error) => console.error("Erro ao buscar jogos:", error));
  }, []);

  return (
    <main className="pageGames">
      <h1>Jogos Perdidos</h1>
      <div className="grid">
        {games.map((game) => (
          <Link key={game.id} href={`/midia/${game.id}`} className="card">
            <img
              src={`http://localhost:3000${game.endereco_imagem}`}
              alt={game.nome_midia}
            />
            <h2>{game.nome_midia}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}

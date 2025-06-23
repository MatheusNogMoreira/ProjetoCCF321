"use client";

import { useEffect, useState } from "react";
import "./Games.css";

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
        const jogos = data.filter(
          (item) => item.tipo_midia.toLowerCase() === "jogo"
        );
        setGames(jogos);
      })
      .catch((error) => console.error("Erro ao buscar jogos:", error));
  }, []);

  return (
    <main className="pageGames">
      <h1>Jogos Perdidos</h1>
      <div className="grid">
        {games.map((game) => (
          <div key={game.id} className="card">
            <img
              src={`http://localhost:3000${game.endereco_imagem}`}
              alt={game.nome_midia}
            />
            <h2>{game.nome_midia}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}

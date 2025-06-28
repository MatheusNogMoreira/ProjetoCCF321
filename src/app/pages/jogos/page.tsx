"use client";

import { useEffect, useState } from "react";
import Midia_card from "@/app/components/midia_card/Midia_card";
import "./Games.css";

interface Midia {
  id: number;
  nome_midia: string;
  tipo_midia: string;
  endereco_imagem: string;
  descricao: string;
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
      <h1 className="titulo-centralizado">Jogos Perdidos</h1>
      <div className="grid">
        {games.map((game) => (
          <Midia_card key={game.id} id={game.id} imagem={game.endereco_imagem}>
            {game.nome_midia}
          </Midia_card>
        ))}
      </div>
    </main>
  );
}
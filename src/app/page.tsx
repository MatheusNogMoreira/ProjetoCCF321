"use client";

import { useEffect, useState } from "react";
import Midia_card from "@/app/components/midia_card/Midia_card";
import BarContainer from "@/app/components/Bar_bontainer/BarContainer";
import Button from "@/app/components/button/Button";
import Link from "next/link";
import "./pageHome.css";

interface Midia {
  id: number;
  nome_midia: string;
  tipo_midia: string;
  endereco_imagem: string;
  descricao: string;
}

export default function Home() {
  const [midias, setMidias] = useState<Midia[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/midias")
      .then((res) => res.json())
      .then((data: Midia[]) => setMidias(data))
      .catch((error) => console.error("Erro ao buscar mídias:", error));
  }, []);

  const renderMidias = (tipo: string) => {
    return midias
      .filter((m) => m.tipo_midia.toLowerCase() === tipo.toLowerCase())
      .map((m) => (
        <Midia_card key={m.id} id={m.id}>
          {m.nome_midia}
        </Midia_card>
      ));
  };

  return (
    <main className="pagehome">
      <div>
        <div className="botao">
          <Button>Recentes</Button>
        </div>
        <div className="barcontainer">
          {midias.slice(0, 10).map((m) => (
            <Midia_card key={m.id} id={m.id}>
              {m.nome_midia}
            </Midia_card>
          ))}
        </div>

        <div className="botao">
          <Link href="/filmes">
            <Button>FILMES</Button>
          </Link>
        </div>
        <div className="barcontainer">{renderMidias("Filmes")}</div>

        <div className="botao">
          <Link href="/jogos">
            <Button>JOGOS</Button>
          </Link>
        </div>
        <div className="barcontainer">{renderMidias("Jogo")}</div>

        <div className="botao">
          <Link href="/outras_midias">
            <Button>OUTROS</Button>
          </Link>
        </div>
        <div className="barcontainer">{renderMidias("Outro")}</div>
      </div>
    </main>
  );
}

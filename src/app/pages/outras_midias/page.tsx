"use client";

import { useEffect, useState } from "react";
import Midia_card from "@/app/components/midia_card/Midia_card";
import "./Others.css";

interface Midia {
  id: number;
  nome_midia: string;
  tipo_midia: string;
  endereco_imagem: string;
  descricao: string;
}

export default function Others() {
  const [others, setOthers] = useState<Midia[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/midias")
      .then((res) => res.json())
      .then((data: Midia[]) => {
        setOthers(data.filter((item) => item.tipo_midia.toLowerCase() === "outro"));
      })
      .catch((error) => console.error("Erro ao buscar outras mídias:", error));
  }, []);

  return (
    <main className="pageOthers">
      <h1 className="titulo-centralizado">Outras Mídias Perdidas</h1>
      <div className="grid">
        {others.map((midia) => (
          <Midia_card key={midia.id} id={midia.id}>
            {midia.nome_midia}
          </Midia_card>
        ))}
      </div>
    </main>
  );
}
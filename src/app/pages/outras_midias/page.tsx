"use client";

import { useEffect, useState } from "react";
import "./Others.css";
import Link from "next/link";

interface Midia {
  id: number;
  nome_midia: string;
  tipo_midia: string;
  endereco_imagem: string;
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
      <h1>Outras Mídias Perdidas</h1>
      <div className="grid">
        {others.map((midia) => (
          <Link key={midia.id} href={`/midia/${midia.id}`} className="card">
            <img
              src={`http://localhost:3000${midia.endereco_imagem}`}
              alt={midia.nome_midia}
            />
            <h2>{midia.nome_midia}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}

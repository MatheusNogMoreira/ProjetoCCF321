"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // para pegar o id da rota no Next 13 app-router
import MediaDescription from "@/app/components/midia_descrição/MediaDescription";
import MediaTitle from "@/app/components/midia_titulo/MediaTitle";
import "./Media.css";

interface Midia {
  id: number;
  nome_midia: string;
  tipo_midia: string;
  endereco_imagem: string;
  descricao: string;
}

export default function Media() {
  const params = useParams();
  const [midia, setMidia] = useState<Midia | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMidia() {
      if (!params?.id) return;
      try {
        const res = await fetch(`http://localhost:3000/api/midias/${params.id}`);
        if (!res.ok) {
          throw new Error("Mídia não encontrada");
        }
        const data: Midia = await res.json();
        setMidia(data);
      } catch (error) {
        console.error(error);
        setMidia(null);
      } finally {
        setLoading(false);
      }
    }
    fetchMidia();
  }, [params?.id]);

  if (loading) return <p>Carregando...</p>;
  if (!midia) return <p>Mídia não encontrada.</p>;

  return (
    <main className="pageMidia">
      <MediaTitle titulo={midia.nome_midia} data={""} />
      <MediaDescription>{midia.descricao}</MediaDescription>
    </main>
  );
}

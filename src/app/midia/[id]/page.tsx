import React from "react";
import styles from "./midiaPage.module.css";

interface Midia {
  id: number;
  nome_midia: string;
  tipo_midia: string;
  endereco_imagem: string;
  descricao: string;
}

async function getMidiaById(id: string): Promise<Midia> {
  const res = await fetch(`http://localhost:3000/api/midias/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Mídia não encontrada");
  }

  const row = await res.json();

  return {
    ...row,
    descricao: row.Descricao,
  };
}

export default async function MidiaPage({ params }: { params: { id: string } }) {
  let midia: Midia;

  try {
    midia = await getMidiaById(params.id);
  } catch (error) {
    return <div>Mídia não encontrada</div>;
  }

  return (
    <main className={styles.midiaPage}>
      <h1 className={styles.title}>{midia.nome_midia}</h1>

      <div className={styles.typeBlock}>Tipo: {midia.tipo_midia}</div>

      <div className={styles.imageBlock}>
        <img src={midia.endereco_imagem} alt={midia.nome_midia} />
      </div>

      <div className={styles.descriptionBlock}>
        <strong>Descrição:</strong> <br />
        {midia.descricao || "Sem descrição disponível."}
      </div>
    </main>
  );
}

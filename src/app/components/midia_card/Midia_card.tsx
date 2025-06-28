"use client";

import Style from "./Midia_card.module.css";
import { ReactNode, useState } from "react";
import Link from "next/link";

type Props = {
  id: number;
  children: ReactNode;
  imagem: string;
};

export default function Midia_card({ id, children, imagem }: Props) {
  const [click, setClick] = useState(false);

  function handlerClick() {
    setClick(true);
    setTimeout(() => {
      setClick(false);
    }, 500);
  }

  return (
    <Link href={`/midia/${id}`}>
      <div
        onClick={handlerClick}
        className={`${Style.media_card} ${click ? Style.media_card_click : ""}`}
        style={{
          backgroundImage: `url('/SimboloLostMedia.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={Style.media_info}>{children}</div>
      </div>
    </Link>
  );
}

"use client";

import Link from "next/link";
import Style from "./Midia_card.module.css";
import { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
  id: number;
};

export default function Midia_card({ children, id }: Props) {
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
      >
        <div className={Style.media_info}>{children}</div>
      </div>
    </Link>
  );
}

import Style from "./Midia_card.module.css"
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export default function Midia_card({children}:Props){
    return(
        <div className = {Style.media_card}>
            <div className ={Style.media_info}>
                {children}
            </div>
        </div>
    )
}
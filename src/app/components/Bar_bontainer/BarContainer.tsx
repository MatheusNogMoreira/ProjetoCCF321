import { ReactNode } from "react"
import Styles from "./BarContainer.module.css"
import Button from "../button/Button"

type prop = {
        children:ReactNode
    }

export default function BarContainer({children}:prop){
     
    return(

        <div className={Styles.barscroll}>
            {children}
        </div>

    )
}
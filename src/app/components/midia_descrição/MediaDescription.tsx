import { ReactNode } from "react";
import Button from "../button/Button";
import Styles from  "./MediaDescription.module.css"

type Pops ={
    children : ReactNode
}

export default function MediaDescription({children}:Pops){
    return(
        <div className={Styles.mediaLink}>
            <div className={Styles.mediaText}>
                <p>{children}</p>
            </div>

                <Button>
                    ACESSAR MIDIA
                </Button> 
        </div>
    )
}
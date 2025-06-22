import Styles from "./MediaTitle.module.css"

type Pops = {
    titulo : string,
    data : string,
}

export default function MediaTitle({titulo,data}:Pops){
    return(
        <div className={Styles.mediaTitle}>
            <h1>{titulo}</h1>
            <div className={Styles.mediaImg}></div>
            <p>{data}</p>
        </div>
    )
}
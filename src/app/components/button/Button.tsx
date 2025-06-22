import styles from "./Button.module.css"
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export default function Button({children}:Props){

    return(
        <button className={styles.button}>
            {children}
        </button>
    )
}
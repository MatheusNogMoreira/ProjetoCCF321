import Link from "next/link";
import Styles from "./Dashboard.module.css";
import Button from "../button/Button";

export function Dashboard(){
    return(
        <header className={Styles.navheader}>
            <div>
                <div >
                    <div className={Styles.divlogo}></div>
                
                    <nav className={Styles.navclass}>
                        <Link href='/'> 
                            <Button>
                                INICIO
                            </Button>
                        </Link>
                        
                        <Link href='/filmes'> 
                            <Button>
                                FILMES
                            </Button>
                        </Link>

                        <Link href='/jogos'> 
                            <Button>
                                JOGOS
                            </Button>
                        </Link>

                        <Link href='/outras_midias'> 
                            <Button>
                                OUTRAS MIDIAS
                            </Button>
                        </Link>

                        <Link href='/enviar'> 
                            <Button>
                                ENVIAR MIDIA
                            </Button>
                        </Link>

                        <Link href='/informacoes'> 
                            <Button>
                                INFORMACOES
                            </Button>
                        </Link>

                    </nav>
                </div>
            </div>
        </header>
    )
}
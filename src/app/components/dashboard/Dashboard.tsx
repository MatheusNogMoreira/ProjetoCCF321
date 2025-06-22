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
                        
                        <Link href='/pages/filmes'> 
                            <Button>
                                FILMES
                            </Button>
                        </Link>

                        <Link href='/pages/jogos'> 
                            <Button>
                                JOGOS
                            </Button>
                        </Link>

                        <Link href='/pages/outras_midias'> 
                            <Button>
                                OUTRAS MIDIAS
                            </Button>
                        </Link>

                        <Link href='/pages/enviar'> 
                            <Button>
                                ENVIAR MIDIA
                            </Button>
                        </Link>

                        <Link href='/pages/informacoes'> 
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
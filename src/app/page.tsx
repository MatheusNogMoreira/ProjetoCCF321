import Button from "@/components/button/Button";
import Midia_card from "@/components/midia_card/Midia_card";
import "./pageHome.css"
import BarContainer from "@/components/Bar_bontainer/BarContainer";
import Link from "next/link";


export default function Home(){
    return(
        <main className="pagehome">
            <div>
                <div className='botao'>
                    <Button>
                        RESSENTES
                    </Button>
                </div>
                <BarContainer>
                    <Midia_card > mdlfaçshgipag</Midia_card>
                    <Midia_card>ASSOUHGP</Midia_card>
                    <Midia_card> hsdapshdfas</Midia_card>
                    <Midia_card> fjaospdjfas</Midia_card>
                    <Midia_card>ajsojdfpasj</Midia_card>
                    <Midia_card>fpajspfasj</Midia_card>
                    <Midia_card>sopfkspkdf</Midia_card>
                    <Midia_card>fjijifr</Midia_card>
                    <Midia_card>iefsohpfe</Midia_card>
                    <Midia_card>sgoprejgijs</Midia_card>
                </BarContainer>

                <div className='botao'>
                    <Link href='/filmes'>
                        <Button>
                            FILMES
                        </Button>
                    </Link>
                </div>
                <BarContainer>
                    <Midia_card > mdlfaçshgipag</Midia_card>
                    <Midia_card>ASSOUHGP</Midia_card>
                    <Midia_card> hsdapshdfas</Midia_card>
                    <Midia_card> fjaospdjfas</Midia_card>
                    <Midia_card>ajsojdfpasj</Midia_card>
                    <Midia_card>fpajspfasj</Midia_card>
                    <Midia_card>sopfkspkdf</Midia_card>
                    <Midia_card>fjijifr</Midia_card>
                    <Midia_card>iefsohpfe</Midia_card>
                    <Midia_card>sgoprejgijs</Midia_card>
                </BarContainer>

                <div className='botao'>
                    <Link href='/jogos'>
                        <Button>
                            JOGOS
                        </Button>
                    </Link>
                </div>
                <BarContainer>
                    <Midia_card > mdlfaçshgipag</Midia_card>
                    <Midia_card>ASSOUHGP</Midia_card>
                    <Midia_card> hsdapshdfas</Midia_card>
                    <Midia_card> fjaospdjfas</Midia_card>
                    <Midia_card>ajsojdfpasj</Midia_card>
                    <Midia_card>fpajspfasj</Midia_card>
                    <Midia_card>sopfkspkdf</Midia_card>
                    <Midia_card>fjijifr</Midia_card>
                    <Midia_card>iefsohpfe</Midia_card>
                    <Midia_card>sgoprejgijs</Midia_card>
                </BarContainer>

                <div className='botao'>
                    <Link href='/outras_midias'>
                        <Button>
                            OUTROS
                        </Button>
                    </Link>
                </div>
                <BarContainer>
                    <Midia_card > mdlfaçshgipag</Midia_card>
                    <Midia_card>ASSOUHGP</Midia_card>
                    <Midia_card> hsdapshdfas</Midia_card>
                    <Midia_card> fjaospdjfas</Midia_card>
                    <Midia_card>ajsojdfpasj</Midia_card>
                    <Midia_card>fpajspfasj</Midia_card>
                    <Midia_card>sopfkspkdf</Midia_card>
                    <Midia_card>fjijifr</Midia_card>
                    <Midia_card>iefsohpfe</Midia_card>
                    <Midia_card>sgoprejgijs</Midia_card>
                </BarContainer>
            </div>
        </main>
    )
}
import './Media.css'
import Midia_card from "../../components/midia_card/Midia_card"
import Button from '@/app/components/button/Button'
import MediaDescription from '@/app/components/midia_descrição/MediaDescription'
import MediaTitle from '@/app/components/midia_titulo/MediaTitle'

export default function Media(){
    return(
        <main className='pageMidia'>
            <MediaTitle titulo = 'fjdjfkdjfk' data = '22/02/2222'>
                
            </MediaTitle>
            <MediaDescription>
                O Naruto pode ser um pouco duro as vezes, talvez você não saiba disso, mas o Naruto também cresceu sem pai. Na verdade ele nunca conheceu nenhum de seus pais, e nunca teve nenhum amigo em nossa aldeia. Mesmo assim eu nunca vi ele chorar, ficar zangado ou se dar por vencido, ele está sempre disposto a melhorar, ele quer ser respeitado, é o sonho dele e o Naruto daria a vida por isso sem hesitar. Meu palpite é que ele se cansou de chorar e decidiu fazer alguma coisa a respeito!
            </MediaDescription>
        </main>
    )
}
import './Info.css';

export default function Info() {
    return (
        <main className='pageInfo'>
            <h1>Sobre o projeto</h1>
            <p>
                Obrigado por nos visitar!
            </p>

            <p>
                Este site foi um projeto desenvolvido por estudantes da
                disciplina de Projeto de Sistemas para Web, como trabalho final da disciplina.
                Esperamos que goste do nosso trabalho. Caso queira contribuir enviando conteúdos
                para serem postados no site, basta entrar em contato através do e-mail abaixo!
            </p>

            <h1>Contato</h1>

            <p>
                Enviar conteúdos: <a href="mailto:email@email.com">email@email.com</a>
            </p>

            <p>
                Entrar em contato com os desenvolvedores: <a href="mailto:email@email.com">email@email.com</a>
            </p>
        </main>
    );
}

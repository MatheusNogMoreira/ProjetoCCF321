"use client";
import "./pageEnviar.css";

export default function Enviar() {
    return (
        <main className="page-enviar">
            <div className="form-container">
                <h1>Enviar Mídia Perdida</h1>
                <p>Preencha o formulário abaixo com o máximo de informações sobre a mídia. Ela será enviada para o time do site via e-mail.</p>

                <form className="form-enviar" onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="nome">Nome da Mídia:</label>
                    <input type="text" id="nome" name="nome" required />

                    <label htmlFor="tipo">Tipo:</label>
                    <select id="tipo" name="tipo" required>
                        <option value="">Selecione</option>
                        <option value="video">Vídeo</option>
                        <option value="jogo">Jogo</option>
                        <option value="filme">Filme</option>
                        <option value="outro">Outro</option>
                    </select>

                    <label htmlFor="descricao">Descrição / Informações:</label>
                    <textarea id="descricao" name="descricao" rows={6} required />

                    <label htmlFor="imagem">Imagem da Mídia:</label>
                    <input type="file" id="imagem" name="imagem" accept="image/*" />

                    <button type="submit">Enviar por e-mail</button>
                </form>
            </div>
        </main>
    );
}

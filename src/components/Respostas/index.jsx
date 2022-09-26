import './style.css'
export const Respostas = ({palavra, resposta}) => {
    return(
        <main>
            <h2>Palvra: { palavra }</h2>
            <p><span>singnificado: </span>{ resposta }</p>
        </main>
    );
}
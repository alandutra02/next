export default function Cabecalho(props) {
    // props é somente leitura. Não se pode fazer props.titulo="novo titulo"
    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    )
}
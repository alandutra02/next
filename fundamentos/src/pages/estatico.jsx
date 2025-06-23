import { useEffect, useState } from "react";

const Estatico = props => {
    const [valor, setValor] = useState(0)

    async function obterValor() {
        const resp = await fetch('http://localhost:3000/api/random')
        const dados = await resp.json()
        setValor(dados.valor)
    }

    useEffect(obterValor, [])

    return (
        <div>
            <h1>Conteúdo Estático</h1>
            <h2>Último Valor = {valor}</h2>
        </div>
    )
}

export default Estatico
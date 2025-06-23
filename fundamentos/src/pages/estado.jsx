import Layout from "@/components/Layout";
import { useState } from "react";

export default function Estado() {

    // abaixo é feito o destructuring para facilitar o uso do useState. Se não for feito o destructuruing teremos que fazer conforme as linhas comentadas abaixo
    const [numero, setNumero] = useState(0) // React Hooks
    /* const state = useState(0) // caso o destructuring não fosse feito teriamos que descomentar esse bloco
    let numero = state[0] // posição zero do state refere-se ao valor, a posição 1 do array refere-se a uma função que pode ser definida
    let alteraNumero = state[1] */

    function incrementar() {
        // alteraNumero(numero + 1) // caso o destructuring não fosse feito, teríamos que descomentar esta linha
        setNumero(numero + 1)
    }
    return (
        <Layout titulo="Componente com Estado">
            <div>{numero}</div>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}
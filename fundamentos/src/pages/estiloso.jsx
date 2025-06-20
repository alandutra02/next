import styles from '../styles/Estiloso.module.css'
import Layout from '@/components/Layout'
export default function Estiloso() {
    return (
        <Layout titulo="Exemplo de CSS Modularizado"> {/* props.titulo foi definido também dentro do arquivo Layout em {props.titulo}. */}
            <div className={styles.roxo}> {/* Todo o conteúdo dentro desta div, assim como o h1, são considerados children do módulo Layout. O módulo Layout é importado aqui e haverá a renderização do {props.children} que está presente dentro do arquivo Layout.jsx*/}
                <h1>Estilo usando CSS módulos</h1> 
            </div>
        </Layout>
    )
}
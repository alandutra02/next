import styles from '../styles/Navegador.module.css'
import Link from "next/link"
export default function Navegador(props) {
    // styles presente na propriedade da div abaixo é uma forma de inserir estilo inline no jsx e isso é feito em forma de objeto. O primeiro par de chaves representa o espaço para comandos javascript enquanto o par de chave mais interno é o objeto que vai conter o css inline do jsx.
    return (
        <div>
            <Link href={props.destino} style={{
                textDecoration: 'none'
            }}>
                <div className={styles.navegador} style={{
                    backgroundColor: props.cor ?? 'dodgerblue',
                }}>
                    {props.menu}
                </div>
            </Link>
        </div>
    )
}
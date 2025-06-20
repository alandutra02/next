import Link from "next/link"
import styles from '../styles/Estiloso.module.css'
export default function Inicio() {
    return (
        <>
            <Link className={styles.linkBranco} href="/estiloso">Estiloso</Link>
        </>
    )
}
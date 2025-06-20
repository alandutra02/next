import Link from "next/link"
import Navegador from "@/components/Navegador"
export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh',
        }}>
            <Navegador destino='/estiloso' menu="Estiloso"/>
            <Navegador destino='/exemplo' menu="Exemplo" cor="#9400d3" />
            <Navegador destino='/jsx' menu="JSX" cor="crimson" />
        </div>
    )
}
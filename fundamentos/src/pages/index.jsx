import Navegador from "@/components/Navegador"
export default function Inicio() {
    // styles presente na propriedade da div abaixo é uma forma de inserir estilo inline no jsx e isso é feito em forma de objeto. O primeiro par de chaves representa o espaço para comandos javascript enquanto o par de chave mais interno é o objeto que vai conter o css inline do jsx.
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
            <Navegador destino='/navegacao' menu="Navegação #01" cor="green" />
        </div>
    )
}
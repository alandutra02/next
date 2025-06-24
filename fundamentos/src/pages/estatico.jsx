
import Layout from "@/components/Layout"

export const getStaticProps = async () => { // getStaticProps é uma função do next.js. Essa função deve retornar um objeto com a propriedade props, e essas props serão injetadas automaticamente no componente da página, que no caso é Estatico = props =>{}.

    const valor = Math.random() // poderíamos usar uma API comentada abaixo para receber o valor randon de um backend, mas para gerar o conteúdo estático, precisamos fazer o npm run build, só que a API tem que estar funcionando, e como eles usam a mesma porta no next.js isso não é possível. Então não usamos uma API para retornar o valor de random e decidimos pegar o valor localmente. Em seguida usamos o npm run build para contruir o conteúdo estático e depois executamos o npm start para que a pagina estática seja atualizada a cada 10 segundos. Usando o npm run dev não funciona a página estatica porque no ambiente de desenvolvimento cada requisição gera uma página nova, não fazendo o efeito a página estática.
    /* const resp = await fetch('http://localhost:3000/api/random')
    const dados = await resp.json() */

    return {
        revalidate: 10, //revalidate é uma propriedade de getStaticProps(). Valor é em segundos. quer dizer que neste caso a página vai ser gerada a cada 10 segundos
        props: {
            valor
            //valor: dados.valor //usado apenas com a API que foi comentada acima
        }
    }
}
const Estatico = props => { // aqui está o componente da página e é aqui que o Next.js injeta automaticamente o objeto retornado pela função getStaticPrps(){}

    return (
        <Layout titulo="Conteúdo Estático">            
            <div>
                <h1>Conteúdo Estático</h1>
                <h2>Último Valor = {props.valor}</h2>
            </div>
        </Layout>
    )
}

export default Estatico
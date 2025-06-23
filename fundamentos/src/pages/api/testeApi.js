export default function handler(req, res) {
    res.status(200).json({
        name: 'Teste API',
        metodo: req.method,
        nome: req.query.nome,
        idade: +req.query.idade // o sinal + converte o resultado de query.idade de string para numero
    })
}
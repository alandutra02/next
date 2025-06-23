export default function cliente(req, res) {
    if(req.method === 'GET')
    res.status(200).send('oi') // resposta em string
    
    else if (req.method == 'PUT') { // resposta em objeto
        res.status(200).json({
        nome: "jorge",
        id: 123,
        sobrenome: "Dutra"
        })
    } else {
        res.status(405).end()
    }
}
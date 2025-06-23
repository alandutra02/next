export default function handler(req, res) {
    const codigo = req.query.codigo
    // res.status(200).send({ também poderia ser utilizada esta linha com send no lugar de json que teria o mesmo efeito.
    res.status(200).json({
        id: `${codigo}`,
        nome: `Jorge ${codigo}`,
        email: `alandutra${codigo}@yahoo.com.br`
    })
}
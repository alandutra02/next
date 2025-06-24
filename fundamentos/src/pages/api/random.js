const random = (req, res) => {
    res.status(200).json({valor: Math.random()})
}

export default random
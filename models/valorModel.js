const fetch = require('node-fetch')

function obterValor(req, res) {
    let url = 'https://free.currencyconverterapi.com/api/v6/convert?q=USD_BRL&compact=ultra&apiKey=873041c527593ec7e31e'
    fetch(url)
    .then((response) => {
         return response.json()
    })
    .then((rows) => {
        let value = req.params.valor
        let result = value / rows.USD_BRL
        console.log('Dolar: ' + rows.USD_BRL)
        console.log('Real: ' + value)
        return res.json(result)
    })
}
module.exports = {obterValor}
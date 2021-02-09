const app = require('express')();
const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, './.env')});
const Axios = require('axios').default
const cors = require('cors')

app.use(cors())

app.get('/:cityname', (req, res) => {
    Axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.KEY}&q=${req.params.cityname}`).then(data => {
        res.send(data.data)
     })
})

app.listen(5000, () => {
    console.log("dev server is up")
})
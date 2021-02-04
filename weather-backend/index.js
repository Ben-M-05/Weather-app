const app = require('express')();
require('dotenv').config();
const Axios = require('axios').default
const cors = require('cors')

app.use(cors())

app.get('/:cityname', (req, res) => {
    Axios.get(`http://api.weatherapi.com/v1/current.json?key=96d1d0e0f8874655bab24036212601&q=${req.params.cityname}`).then(data => {
        res.send(data.data)
     })
})

app.listen(5000, () => {
    console.log("dev server is up")
})
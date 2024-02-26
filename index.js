const express = require('express')
const cors = require("cors")
var url = require('url')

const app = express()

const corsOptions = {
    // block requests from origins that do not match the following
    origin: "https://wonderful-tree-04bcf0610.4.azurestaticapps.net",
    methods: "GET",
    allowedHeaders: 'Access-Control-Allow-Origin',
    optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))


app.use(express.static(__dirname + '/static'))

app.get('/', (req, res) => res.render('home'))

// generate random number based on the "d" value passed by the url
app.get('/roll', (request, response) => {
    console.log('Calling "/roll".')
    var inputs = url.parse(request.url, true).query
    let roll = Math.floor(Math.random() * parseInt(inputs.d)) + 1
    response.send(roll.toString())
})

// Custom 404 page.
app.use((request, response) => {
    response.sendStatus(404)
    response.send('404 - Not Found')
})

// Custom 500 page.
app.use((err, request, response, next) => {
    console.error(err.message)
    response.sendStatus(500)
    response.send('500 - Server Error')
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(
    `Express started at \"http://localhost:${port}\"\n` +
    `press Ctrl-C to terminate.`)
    )
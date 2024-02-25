const express = require('express')
const cors = require("cors")
const port = process.env.PORT || 3000

const app = express()

var url = require('url')


app.use(express.static(__dirname + '/static'))
app.use(cors({ origin: '*' }))

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

app.listen(port, () => console.log(
    `Express started at \"http://localhost:${port}\"\n` +
    `press Ctrl-C to terminate.`)
)
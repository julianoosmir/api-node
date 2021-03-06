const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

let db = [
    { '1': { Nome: 'Cliente 1', idade: '20' } },
    { '2': { Nome: 'Cliente 2', idade: '20' } },
    { '3': { Nome: 'Cliente 3', idade: '20' } },
]

app.get('/', (req, res) => {
    return res.json(db);
})

app.post("/add", (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).end()
    } else {
        db.push(body) 
        return res.json(body)
    }
    
})

app.listen(21262, () => {
    console.log("express started at http://localhost:21262")
})
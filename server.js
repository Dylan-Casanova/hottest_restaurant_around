const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [];

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/view', (req, res) => res.sendFile(path.join(__dirname, 'view.html')));

app.get('/make', (req, res) => res.sendFile(path.join(__dirname, 'make.html')));

app.get('/api/view', (req , res) => {
    return res.json(tables);
})

app.post('/api/view', (req, res)=> {
    const newTable = req.body;
    tables.push(newTable)
    tables.number = tables.length
    res.json(newTable)
})

app.listen(PORT, () =>console.log(`App listening on PORT ${PORT}`))
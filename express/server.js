const express = require('express')
const app = express ()


app.get('/', (req, res) => {
    res.send('Homepage')
})

app.get('/Available', (req, res) => {
    const personnel = [
        {
            id: 1,
            firstname: 'phil',
            middlename: 'j',
            lastname: 'lo'
        },
        {
            id: 2,
            firstname: 'mlaf',
            middlename: 'j',
            lastname: 'oinkowicz'
        },
        {
            id: 3,
            firstname: 'car',
            middlename: 'los',
            lastname: 'panda'
        },
    ];
    res.json(personnel);
})

app.get('/Leave', (req, res) => {
    res.send('Leave')
})

app.get('/TDY', (req, res) => {
    res.send('TDY')
})

app.get('/Projections', (req, res) => {
    res.send('Projections')
})

app.listen(3001)

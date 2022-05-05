const express = require('express');
const app = express ();
const cors = require('cors');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// import available route
const availRoute = require('./routes/available')

// Middleware
app.use(express.json())
app.use(cors({
    origin: "*"
}))
app.use('/available', availRoute)


// Routes
app.get('/', (req, res) => {
    res.send('This is where my server starts')
})

app.post('/', async (req, res) => {
    const  { firstname, middlename, lastname }  = req.body
    const add = await prisma.personnel.create({
        data: {
            firstname,
            middlename,
            lastname
        },
    })
    res.json(add);
})

app.listen(3001, () => {
    console.log("HEY LOOK MY SERVER IS BEING RENDERED")
})

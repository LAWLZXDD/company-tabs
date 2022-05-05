const express = require('express');
const router = express.Router();
const cors = require('cors')

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.use(cors())


router.get('/', async (req, res, next) => {
    try {
        const available = await prisma.personnel.findMany({})
        res.json(available)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    res.send({ message: 'api is working' })
})

router.delete('/:id', async (req, res, next) => {
    res.send({ message: 'api is working' })
})

router.patch('/:id', async (req, res, next) => {
    res.send({ message: 'api is working' })
})

module.exports = router;
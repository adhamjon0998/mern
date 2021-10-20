const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use(express.json({extended: true}))

app.use('/api/auth', require('./routes/auth.routes'))


const PORT = config.get('port') || 5000
async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {

        })
        app.listen(5000, (req, res) => {
            console.log(`App has been started on ${PORT} port`);
        })
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}
start()


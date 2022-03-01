const express = require('express')
const cors = require('cors')

const SERVER_PORT = 4004

const{getHouses, createHouse, updateHouse, deleteHouse} = require('./controller')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/api/houses', getHouses)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)
app.delete('/api/houses/:id', deleteHouse)

app.listen(SERVER_PORT,() => {
    console.log('docked at port 4004')
})
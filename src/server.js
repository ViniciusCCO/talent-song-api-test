const express = require('express')
const cors = require('cors')

const router = require('./routes.js')

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(3333, () => console.log(`Server is run on PORT 3333`))
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

mongoose.connect(process.env.DATABASE_CLOUD, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
    .then(() => console.log('DB Connected'))
    .catch(err => console.log(err))

const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const categoryRoutes = require('./routes/category')
//app middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
//app.use(cors(CLIENT_URL)) allow only from frontend port 3000
app.use(cors({ origin: `${process.env.CLIENT_URL}` }))

//middlewares
app.use('/api', authRoutes)
app.use('/api', userRoutes)
app.use('/api', categoryRoutes)

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`API is running on port ${port}`))
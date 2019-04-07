const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const methodOverride = require('method-override')

const config = require('./config')

const port = process.env.PORT || 3001

const mongooseConnectionOptions = {
  useNewUrlParser: true,
  useFindAndModify: false
}

mongoose.connect(config.url, mongooseConnectionOptions)

const app = express()

app.use(helmet())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(methodOverride())
app.use(cors())
app.use(morgan('combined'))

app.use('/api', require('./routes/api'))

app.listen(port, () => {
  console.log(`Jules is running on port ${port}`)  
})

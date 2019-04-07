const express = require('express')
const moment = require('moment')

const router = express.Router()

// models
const AssetModel = require('../models/asset-model')

const models = {
  AssetModel
}

// each api handles it's own routes

const assetsApi = require('../api/assets/assets-api')

assetsApi(router, models)

module.exports = router

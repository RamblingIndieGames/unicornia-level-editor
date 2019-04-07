const moment = require('moment')

const assetTypes = require('./asset-types')

module.exports = ({ AssetModel, req, res, next }) => {
  const {
    source = '',
    name = '',
    type = '',
    width = 0,
    height = 0
  } = req.body

  const currentTime = moment().toDate()

  const created = currentTime
  const updated = currentTime

  if (source === '') {
    throw new Error('Asset Source is Empty!')
  }

  if (name === '') {
    throw new Error('Asset Name Cannot be Empty!')
  }

  if (!assetTypes.includes(type)) {
    throw new Error(`Unknown Asset Type: "${type}"!`)
  }

  if (width <= 0) {
    throw new Error(`Asset Width (${width}) Must be Positive!`)
  }

  if (height <= 0) {
    throw new Error(`Asset Height (${height}) Must be Positive!`)
  }

  const data = {
    source,
    name,
    type,
    width,
    height,
    created,
    updated
  }

  console.log({ task: 'Creating Asset', ...data })

  AssetModel.create(data, (err, asset) => {
    if (err) {
      console.log(err)
      res.send(err)
    }
    console.log(`*** Asset Created Successfully`)
    res.json(asset)
  })
}

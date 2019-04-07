const moment = require('moment')

const assetTypes = require('./asset-types')

module.exports = ({ AssetModel, req, res, next }) => {  
  const { assetId } = req.params

  const {
    source,
    name,
    type,
    width,
    height
  } = req.body
  
  const currentTime = moment().toDate()

  const updated = currentTime

  const data = {
    source,
    name,
    type,
    width,
    height,
    updated
  }

  Object.keys(data).forEach(key => {
    if (!data[key]) {
      delete data[key]
    }
  })

  if (data.source !== undefined && data.source === '') {
    throw new Error('Asset Source is Empty!')
  }

  if (data.name !== undefined && data.name === '') {
    throw new Error('Asset Name Cannot be Empty!')
  }

  if (data.type !== undefined && !assetTypes.includes(data.type)) {
    throw new Error(`Unknown Asset Type: "${data.type}"!`)
  }

  if (data.width !== undefined && data.width <= 0) {
    throw new Error(`Asset Width (${data.width}) Must be Positive!`)
  }

  if (data.height !== undefined && data.height <= 0) {
    throw new Error(`Asset Height (${data.height}) Must be Positive!`)
  }

  console.log(`*** Updating Asset ${assetId}`)

  AssetModel.findByIdAndUpdate(assetId, data, (err, asset) => {
    if (err) {
      console.log(err)
      res.send(err)
    }

    console.log('*** Asset Updated Successfully')

    AssetModel.find((err, assets) => {
      if (err) {
        console.log(err)
        res.send(err)
      }

      console.log(`*** Jules Now Serves ${assets.length} Asset${assets.length === 1 ? '' : 's'}`)
      res.json(assets)
    })
  })
}

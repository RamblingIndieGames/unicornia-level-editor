module.exports = ({ AssetModel, req, res, next }) => {
  const { assetId } = req.params

  console.log(`*** Deleting Asset ${assetId}`)

  AssetModel.remove({ _id: assetId }, (err) => {
    if (err) {
      console.log(err)
      res.send(err)
    }

    console.log('*** Asset Deleted Successfully')
    res.send({
      message: `Asset ${assetId} Permanently Deleted`
    })
  })
}

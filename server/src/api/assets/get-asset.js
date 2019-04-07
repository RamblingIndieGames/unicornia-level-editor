module.exports = ({ AssetModel, req, res, next }) => {
  const { assetId } = req.params
  
  AssetModel.findById(assetId, (err, asset) => {
    if (err) {
      res.send(err)
    }
    res.json(asset)
  })
}

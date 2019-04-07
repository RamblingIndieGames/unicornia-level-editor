module.exports = ({ AssetModel, req, res, next }) => {

  AssetModel.find((err, assets) => {
    if (err) {
      res.send(err)
    }
    res.json(assets)
  })
}

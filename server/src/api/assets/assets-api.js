const getAssetById = require('./get-asset')
const getAllAssets = require('./get-assets')
const createNewAsset = require('./create-asset')
const updateAsset = require('./update-asset')
const deleteAsset = require('./delete-asset')

module.exports = (router, models) => {
  const handle = (fn) => (req, res, next) => {
    fn && fn({
      ...models,
      res,
      req,
      next
    })
  }

  router.get('/assets', handle(getAllAssets))
  router.get('/assets/:assetId', handle(getAssetById))
  router.post('/assets', handle(createNewAsset))
  router.patch('/assets/:assetId', handle(updateAsset))
  router.delete('/assets/:assetId', handle(deleteAsset))

  return router
}

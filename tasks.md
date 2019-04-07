LOGIN
As a user I want to see a simple login form with social account support/registration
As a user I want see an option to remember my login until I explicitly logout
As a user I want to securely login to ULE
As a user I want to securely logout of ULE

DASHBOARD
As a user I want to see the last 5 prefabs I have created
As a user I want to see the last 5 levels I have created
As a user I want to see the number of assets I have uploaded
As a user I want to see the number of prefabs I have created
As a user I want to see the number of levels I have created
As a user I want to see the number of level packs I have created
As a user I want to see a button to create a new prefab
As a user I want to see a button to create a new level
As a user I want to see a link to manage my prefabs
As a user I want to see a link to manage my levels
As a user I want to see a link to manage my level packs
As a user I want to see a link to manage my assets
As a user I want to see a link to manage my asset collections

ASSET MANAGER
As a user I want to see a list of all assets I have uploaded
As a user I want to see a list of all asset collections I have created
As a user I want to see a button to upload a new asset
As a user I want to see a button to create a new asset collection
As a user I want to rename assets
As a user I want to rename asset collections
As a user I want to edit assets
As a user I want to edit asset collections
As a user I want to delete assets
As a user I want to delete asset collections
As a user I want to select assets to be exported
As a user I want to select asset collections to be exported
As a user I want to export selected assets to an archive file
As a user I want to export selected asset collections to a file

PREFAB MANAGER
As a user I want to see a list of all prefabs I have created
As a user I want to see a button to create a new prefab
As a user I want to be able to select a prefab to edit
As a user I want to rename prefabs
As a user I want to delete prefabs
As a user I want to delete prefabs to be exported
As a user I want to export selected prefabs to an archive file

LEVEL MANAGER
As a user I want to see a list of all levels I have created
As a user I want to see a list of all level packs I have created
As a user I want to see a button to create a new level
As a user I want to see a button to create a new level pack
As a user I want to rename levels
As a user I want to rename level packs
As a user I want to delete levels
As a user I want to delete level packs
As a user I want to add levels to level packs
As a user I want to remove levels from level packs
As a user I want to export levels to a file
As a user I want to export level packs to a file

PREFAB DESIGNER
As a user I want to define prefabs from uploaded assets
As a user I want to create, edit, and delete prefabs

PREFAB ARRANGER
As a user I want to arrange prefabs into levels





----------------
Routes to Components Mapping

/ -> Dashboard
/dashboard -> Dashboard

/assets -> AssetManager
/assets/edit/:assetId -> AssetEditor

/collections -> AssetCollectionManager
/collections/edit/:collectionId -> AssetCollectionEditor

/prefabs -> PrefabManager
/prefabs/edit/:prefabId -> PrefabEditor

/levels -> LevelManager
/levels/edit/:levelId -> LevelEditor

/packs -> LevelPacksManager
/packs/edit/:packId -> LevelPackEditor


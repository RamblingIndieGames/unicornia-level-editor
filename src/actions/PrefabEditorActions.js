export const addPlatform = ({ id, asset, position }, state) => ({
  platforms: [...state.platforms, { id, asset, position }]
})

export const removePlatform = ({ id }, state) => ({
  platforms: state.platforms.filter(platform => platform.id !== id)
})

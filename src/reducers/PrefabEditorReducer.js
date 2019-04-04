import * as ATypes from 'actions/PrefabEditorActionTypes'
import * as Actions from 'actions/PrefabEditorActions'

const PrefabEditorReducer = (state, action) => {
  console.log({ t: 'reducer', action, state })
  switch (action.type) {
    case ATypes.ADD_PLATFORM:
      console.log('adding platform')
      return Actions.addPlatform(action, state)
    case ATypes.REMOVE_PLATFORM:
      console.log('removing platform')
      return Actions.removePlatform(action, state)
    default:
      throw new Error('unknown action type')
  }
}

export default PrefabEditorReducer

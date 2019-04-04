import React from 'react'
import PropTypes from 'prop-types'

import * as ATypes from 'actions/PrefabEditorActionTypes'

const { floor: mathFloor } = Math

const buildGridCells = ({
  gridWidth = 3,
  gridHeight = 12,
  sceneWidth = 320,
  sceneHeight = 480
}) => {
  const cellWidth = mathFloor(sceneWidth / gridWidth)
  const cellHeight = mathFloor(sceneHeight / gridHeight)

  const cells = []

  const cellCount = gridWidth * gridHeight

  for (let i = 0; i < cellCount; i += 1) {
    const y = ~~(i / gridWidth)
    const x = ~~(i % gridWidth)

    cells.push(
      {
        x: x * cellWidth,
        y: y * cellHeight,
        width: cellWidth - 2,
        height: cellHeight - 2
      }
    )
  }

  return cells
}

const PlatformsEditor = ({
  // dispatch actions
  dispatch,

  // editor settings
  gridWidth = 3,
  gridHeight = 12,
  sceneWidth = 320,
  sceneHeight = 480,

  // editor state
  platforms = [],
  active
}) => {
  return buildGridCells({ gridWidth, gridHeight, sceneWidth, sceneHeight })
    .map(({x, y, width, height}, index) => {
      // get the platform at this position if it exists
      const platform = platforms.find(p => p.position === index)

      return (
        <rect
          key={index}
          x={4 + x}
          y={4 + y}
          width={width - 4}
          height={height - 4}
          fill={!platform ? 'transparent' : '#000'}
          stroke='#000'
          strokeWidth={1}
          onClick={active ? () => {
            if (!platform) {
              dispatch({ type: ATypes.ADD_PLATFORM, id: index, asset: 'asset-url', position: index })
            } else {
              dispatch({ type: ATypes.REMOVE_PLATFORM, id: index })
            }
          } : undefined}
        />
      )
    })
}

PlatformsEditor.propTypes = {
  gridWidth: PropTypes.number,
  gridHeight: PropTypes.number,
  sceneWidth: PropTypes.number,
  sceneHeight: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
  platforms: PropTypes.array.isRequired,
  active: PropTypes.bool
}

const PrefabSceneEditor = ({
  // dispatch actions
  dispatch,

  // editor state
  activeTab,
  platforms = []
}) => {
  // FIXME: this is hard-coded for now, but should be moved into app settings sometime
  const sceneWidth = 320
  const sceneHeight = 480

  const layers = [
    <PlatformsEditor
      // FIXME: hardcoded grid resolution for now, but later this should be configurable
      gridWidth={3}
      gridHeight={12}
      sceneWidth={sceneWidth}
      sceneHeight={sceneHeight}
      platforms={platforms}
      dispatch={dispatch}
      active={activeTab === 0}
    />
  ].map((content, index) => (
    <g
      key={index}
      style={{ opacity: activeTab === index ? 1 : 0.25 }}
    >
      {content}
    </g>
  ))

  return (
    <svg
      viewBox={`0 0 ${sceneWidth} ${sceneHeight}`}
      width={sceneWidth}
      height={sceneHeight}
    >
      <g>
        <rect x={0} y={0} width={320} height={480} fill='white' />
        <rect x={0} y={0} width={320} height={480} fill='transparent' stroke='black' strokeWidth={1} />
      </g>
      {layers}
    </svg>
  )
}

PrefabSceneEditor.propTypes = {
  activeTab: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
  platforms: PropTypes.array.isRequired
}

export default PrefabSceneEditor
/*
<g style={{ opacity: 0.25 }}>
        {
          cells.map(({x, y, width, height}, index) => {
            const platform = platforms.find(p => p.position === index)

            return (
              <rect
                key={index}
                x={4 + x}
                y={4 + y}
                width={width - 4}
                height={height - 4}
                fill={!platform ? 'transparent' : '#000'}
                stroke='#000'
                strokeWidth={1}
                onClick={() => {
                  if (!platform) {
                    dispatch({ type: ATypes.ADD_PLATFORM, id: index, asset: 'asset-url', position: index })
                  } else {
                    dispatch({ type: ATypes.REMOVE_PLATFORM, id: index })
                  }
                  console.log({ t: 'clicked cell', index, cell: cells[index] })
                }}
              />
            )
          })
        }
      </g>
*/

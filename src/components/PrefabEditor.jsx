import React, { useState, useReducer } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'

import blueGrey from '@material-ui/core/colors/blueGrey'

import PrefabSceneEditor from 'components/PrefabSceneEditor'

import PrefabEditorReducer from 'reducers/PrefabEditorReducer'

const styles = theme => ({
  root: {

    // margin: theme.spacing.unit * 3,
    border: `2px solid ${theme.palette.primary.dark}`,
    borderRadius: 10,
    height: '70vh',
    overflow: 'auto',
    backgroundColor: blueGrey[600],
    color: 'white'
  },
  editorContext: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  content: {
    padding: theme.spacing.unit,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const tabs = [
  {
    label: 'Platforms'
  },
  {
    label: 'Items'
  },
  {
    label: 'Entities'
  },
  {
    label: 'Triggers'
  }
]

const PrefabEditor = ({
  classes
}) => {
  const [ state, dispatch ] = useReducer(PrefabEditorReducer, {
    platforms: []
  })

  const [ activeTab, setActiveTab ] = useState(0)

  const onTabsChange = (event, value) => setActiveTab(value)

  return (
    <div className={classes.root}>
      <AppBar
        position='static'
        color='default'
      >
        <Tabs
          value={activeTab}
          onChange={onTabsChange}
          variant='scrollable'
          indicatorColor='primary'
          textColor='primary'
        >
          {
            tabs.map((tab, index) => (
              <Tab
                key={index}
                {...tab}
              />
            ))
          }
        </Tabs>
      </AppBar>
      <div>
        <Typography
          component='p'
          variant='subtitle2'
          color='inherit'
          className={classes.editorContext}
        >
          Editing {tabs[activeTab].label}
        </Typography>
      </div>
      <div className={classes.content}>
        <PrefabSceneEditor
          {...state}
          dispatch={dispatch}
          activeTab={activeTab}
        />
      </div>
    </div>
  )
}

PrefabEditor.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PrefabEditor)

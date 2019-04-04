import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import DashboardIcon from '@material-ui/icons/Dashboard'
import LayersIcon from '@material-ui/icons/Layers'
import GridOnIcon from '@material-ui/icons/GridOn'

const MainMenuDrawer = ({
  classes,
  isDrawerOpen,
  setDrawerOpen,
  activePage,
  setActivePage
}) => (
  <Drawer
    variant='permanent'
    classes={{
      paper: classNames(classes.drawerPaper, !isDrawerOpen && classes.drawerPaperClose)
    }}
    open={isDrawerOpen}
  >
    <div className={classes.toolbarIcon}>
      <IconButton onClick={() => setDrawerOpen(false)}>
        <ChevronLeftIcon />
      </IconButton>
    </div>
    <Divider />
    <List>
      <ListItem button onClick={() => setActivePage('Dashboard')}>
        <ListItemIcon><DashboardIcon /></ListItemIcon>
        <ListItemText primary='Dashboard' />
      </ListItem>
      <ListItem button onClick={() => setActivePage('Prefab Editor')}>
        <ListItemIcon><GridOnIcon /></ListItemIcon>
        <ListItemText primary='Prefab Editor' />
      </ListItem>
      <ListItem button onClick={() => setActivePage('Prefab Arranger')}>
        <ListItemIcon><LayersIcon /></ListItemIcon>
        <ListItemText primary='Prefab Arranger' />
      </ListItem>
      {
        activePage !== 'Dashboard' && (
          <ListSubheader inset>Inspector</ListSubheader>
        )
      }
    </List>
    <Divider />

  </Drawer>
)

MainMenuDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
  setDrawerOpen: PropTypes.func.isRequired,
  activePage: PropTypes.string.isRequired,
  setActivePage: PropTypes.func.isRequired
}

export default MainMenuDrawer

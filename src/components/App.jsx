import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import CssBaseline from '@material-ui/core/CssBaseline'
import { withStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'

import Toolbar from '@material-ui/core/Toolbar'

import IconButton from '@material-ui/core/IconButton'

import Typography from '@material-ui/core/Typography'
import Badge from '@material-ui/core/Badge'

import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/Notifications'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

import MainMenuDrawer from './MainMenuDrawer'
import Dashboard from './Dashboard'

const drawerWidth = 240

const styles = theme => ({
  root: {
    display: 'flex'
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  menuButtonHidden: {
    display: 'none'
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto'
  },
  chartContainer: {
    marginLeft: -22
  },
  tableContainer: {
    height: 320
  },
  h5: {
    marginBottom: theme.spacing.unit * 2
  }
})

const App = ({
  classes
}) => {
  const [ isDrawerOpen, setDrawerOpen ] = useState(true)

  const [ activePage, setActivePage ] = useState('Dashboard')

  const [ activeUsername ] = useState('Richard Marks')

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='absolute'
        className={classNames(classes.appBar, isDrawerOpen && classes.appBarShift)}
      >
        <Toolbar
          disableGutters={!isDrawerOpen}
          className={classes.toolbar}
        >
          <IconButton
            color='inherit'
            aria-label='Open Drawer'
            onClick={() => setDrawerOpen(true)}
            className={classNames(classes.menuButton, isDrawerOpen && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component='h1'
            variant='h6'
            color='inherit'
            noWrap
            className={classes.title}
          >
            {activePage}
          </Typography>
          <Typography
            component='h1'
            variant='h6'
            color='inherit'
            noWrap
            className={classes.user}
          >
            {activeUsername} <ArrowDropDownIcon />
          </Typography>
          <IconButton color='inherit'>
            <Badge
              badgeContent={1}
              color='secondary'
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <MainMenuDrawer
        classes={classes}
        isDrawerOpen={isDrawerOpen}
        setDrawerOpen={setDrawerOpen}
        activePage={activePage}
        setActivePage={setActivePage}
      />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {activePage === 'Dashboard' && <Dashboard />}
      </main>
    </div>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)

import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const styles = theme => ({
  root: {

  },
  actionContainer: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  recentContainer: {
    display: 'flex'
  },
  recentLevelsList: {
    flex: 1,
    margin: theme.spacing.unit,
    border: `2px solid ${theme.palette.primary.dark}`,
    borderRadius: 10
  },
  recentPrefabsList: {
    flex: 1,
    margin: theme.spacing.unit,
    border: `2px solid ${theme.palette.primary.dark}`,
    borderRadius: 10
  }
})

const Dashboard = ({
  classes
}) => {
  return (
    <div className={classes.root}>
      <Typography
        variant='h4'
        component='h2'
        gutterBottom
      >
        Welcome to the Unicornia Level Editor!
      </Typography>
      <div className={classes.actionContainer}>
        <Button
          variant='contained'
          color='primary'
          size='large'
        >
          Create New Level
        </Button>
        <Button
          variant='contained'
          color='primary'
          size='large'
        >
          Create New Prefab
        </Button>
      </div>
      <div className={classes.recentContainer}>
        <List className={classes.recentLevelsList}>
          <ListItem>
            <ListItemText
              primary='Test Level'
              secondary='April 3, 2019'
            />
            <Button variant='contained'>Load</Button>
          </ListItem>
        </List>

        <List className={classes.recentPrefabsList}>
          <ListItem>
            <ListItemText
              primary='PF 3'
              secondary='April 3, 2019'
            />
            <Button variant='contained'>Edit</Button>
          </ListItem>
          <ListItem>
            <ListItemText
              primary='PF 2'
              secondary='April 3, 2019'
            />
            <Button variant='contained'>Edit</Button>
          </ListItem>
          <ListItem>
            <ListItemText
              primary='PF 1'
              secondary='April 3, 2019'
            />
            <Button variant='contained'>Edit</Button>
          </ListItem>
        </List>
      </div>
    </div>
  )
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Dashboard)

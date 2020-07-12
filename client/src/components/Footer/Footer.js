import React from 'react'
// mui imports
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CodeIcon from '@material-ui/icons/Code'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    fontFamily: 'MontSerrat',
    fontSize: '100%'
  },
  sticky: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  }
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar className={classes.sticky} position='static'>
        <Toolbar>
            <CodeIcon />
          <Typography variant="h6" className={classes.title} align='center'>
            mercedessierra.io
          </Typography>
          <CodeIcon />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Footer
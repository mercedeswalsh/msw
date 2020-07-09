import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(50),
      height: theme.spacing(5),
    },
    font: 'Roboto Slab',
    alignItemsAndJustifyContent: {
      alignItems: 'center',
      justifyContent: 'center'
    }
  },
}))

const Title = () => {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <Paper elevation={0} className={classes.alignItemsAndJustifyContent}>
          <Typography variant="h4" component="div" align="center">
            hi, i'm mercedes :-)
          </Typography>
      </Paper>
    </div>

  )
}

export default Title
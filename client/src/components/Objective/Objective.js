
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
// mui imports
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    flexGrow: 1
  },
  card: {
    backgroundColor: '#fec0ce',
  },
  words: {
    fontFamily: 'Montserrat',
    fontSize: '200%',
    textAlign: 'center'
  },
  button: {
      color: theme.palette.primary,
      textAlign: 'center',
      alignItems: 'center',
      fontFamily: 'Montserrat',
      fontSize: '90%',
      '& > *': {
        margin: theme.spacing(1),
      },
  }
}))

const Objective = () => {
  const classes = useStyles()

  return (
    <Card className={classes.root} elevation='0'>
      <CardContent className={classes.card}>
        <Typography className={classes.words} color="textSecondary">
            ...and I am a freelance full stack web developer and graphic designer. :) <br /><br />
            check me out: <br />
        </Typography>
      </CardContent>
      <CardActions className={classes.card}>
        <Grid container className={classes.root} spacing={8} align='center'>
        <Grid item xs={4} align='center'>
          <Link component={RouterLink} to="/projects"><Button className={classes.button} variant='outlined' color='primary' size='small'>PROJECTS</Button></Link >
        </Grid>
        <Grid item xs={4} align='center'>
          <Link component={RouterLink} to="/contact"><Button className={classes.button} variant='outlined' color='primary' size='small'>CONTACT</Button></Link >
        </Grid>
        <Grid item xs={4} align='center'>
          <Link component={RouterLink} to="/about"><Button className={classes.button} variant='outlined' color='primary' size='small'>ABOUT</Button></Link >
        </Grid>
        </Grid>
      </CardActions>
    </Card>
  )
}

export default Objective
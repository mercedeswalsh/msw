
import React from 'react'
// mui imports
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode'
import ContactMailIcon from '@material-ui/icons/ContactMail'
import InfoIcon from '@material-ui/icons/Info'
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
    fontSize: '225%',
    textAlign: 'center'
  },
  button: {
      color: theme.palette.secondary.light,
      textAlign: 'center',
      alignItems: 'center',
      fontFamily: 'Montserrat:wght@600',
      fontSize: '100%',
      color: '#000',
      flexDirection: 'row',
      justify: 'space-evenly',
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
        <ButtonGroup variant="text" color="primary" aria-label="text primary button group" className={classes.button}>
        <Grid item xs={4} align='center'>
            <Button 
                className={classes.button}
                startIcon={<DeveloperModeIcon />}>
            projects
            </Button>
        </Grid>
        <Grid item xs={4} align='center'>
            <Button 
                className={classes.button}
                startIcon={<ContactMailIcon />}>
            contact
            </Button>
        </Grid>
        <Grid item xs={4} align='center'>
            <Button 
                className={classes.button}
                startIcon={<InfoIcon />}>
            about me
            </Button>
        </Grid>
        </ButtonGroup>
        </Grid>
      </CardActions>
    </Card>
  )
}

export default Objective
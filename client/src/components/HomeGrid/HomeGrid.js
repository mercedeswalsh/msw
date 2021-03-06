import React from 'react'
// mui imports
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
// ** imports **
import Hi from '../Hi'
import PhotoCard from '../PhotoCard'
import Objective from '../Objective'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  space: {
    height: 15
  }
}))

const HomeGrid = () => {
  const classes = useStyles()

    return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" className={classes.root}>
        <Grid container spacing={0}>
          {/* empty row 1 */}
          <Grid item xs={4}><div></div></Grid>
          <Grid item xs={4} className={classes.space}><div></div></Grid>
          <Grid item xs={4}><div></div></Grid>
          {/* row 2 (photo) */}
          <Grid item xs={12}>
            <PhotoCard /><br />
          </Grid>
          {/* row 3 (hi) */}
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Hi />
          </Grid>
          <Grid item xs={2} className={classes.space}><div></div></Grid>
          {/* row 4  (objective) */}
          <Grid item xs={12}>
            <Objective />
          </Grid>
        </Grid>
        </Container>
      </React.Fragment>
    )
}

export default HomeGrid

// --- colors ---
// primary - jet - #3c3c3c
// primary LIGHT - #636363
// primary DARK - #2a2a2a
// secondary - pink - #fec0ce
// secondary LIGHT - #feccd7
// secondary DARK - #b18690
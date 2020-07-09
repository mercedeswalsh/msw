import React from 'react'
// mui imports
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
// ** imports **
import Title from '../Title'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
}))

const HomeGrid = () => {
  const [spacing, setSpacing] = React.useState(2)
  const classes = useStyles()

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  }

    return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          {/* <Typography component="div" style={{ backgroundColor: '', height: '100vh' }} /> */}
        <Title />
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
import React from 'react'
// mui imports
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

const HomeGrid = () => {
    return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Typography component="div" style={{ backgroundColor: '', height: '100vh' }} />

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
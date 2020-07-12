import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
// ** imports **
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
// mui theme
import {
    createMuiTheme, 
    ThemeProvider
} from '@material-ui/core/styles'
// css
import './App.css'

// theme
const theme = createMuiTheme({
  palette: {
      primary: {
          main: '#3c3c3c',
          light: '#636363',
          dark: '#2a2a2a',
      },
      secondary: {
          main: '#fec0ce',
          light: '#feccd7',
          dark: '#b18690'
      }
  },
  typography: {
      fontFamily: [
          'Roboto',
          'Roboto Slab',
          'Montserrat',
      ]
  },
  backgroundColor: '#fec0ce'
})

function App() {
  return (
    <>

    <ThemeProvider theme={theme}>
    <Router>
        <div>

            <Switch>
                <Route exact path="/">
                    {/* initial page */}
                    <Home />
                </Route>
            </Switch>

            <Switch>
                <Route exact path="/about">
                    {/* about page */}
                    <About />
                </Route>
            </Switch>

            <Switch>
                <Route exact path="/contact">
                    {/* contact page */}
                    <Contact />
                </Route>
            </Switch>

            <Switch>
                <Route exact path="/projects">
                    {/* projects page */}
                    <Projects />
                </Route>
            </Switch>

        </div>
    </Router>
    </ThemeProvider>

    </>
)
}

export default App

import React from 'react'
// mui imports
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import CodeIcon from '@material-ui/icons/Code'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        font: 'Montserrat',
        color: '#3c3c3c'
    },
    // makes footer position stay at bottom
    sticky: {
        width: '100%',
        position: 'fixed',
        bottom: 0
    },
    label: {
        fontFamily: 'Montserrat'
    }
  }))

const Footer = () => {
    const classes = useStyles()
    const [value, setValue] = React.useState(0)

    return (
        <div className={classes.root}>
            <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue)
            }}
            showLabels
            className={classes.sticky}
            >
                <BottomNavigationAction className={classes.label} label="mercedessierra.io" icon={<CodeIcon />} color="secondary"/>
            </BottomNavigation>
        </div>
    )
}

export default Footer
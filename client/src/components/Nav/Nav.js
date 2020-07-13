import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
// mui imports
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuItem from '@material-ui/core/MenuItem'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Popper from '@material-ui/core/Popper'
import Paper from '@material-ui/core/Paper'
import MenuList from '@material-ui/core/MenuList'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#fec0ce'
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    backgroundColor: '#feccd7'
  },
  menuItems: {
    fontFamily: 'Montserrat',
    color: theme.palette.primary.dark,
    align: 'center',
    underline: 'false'
  }
}))

const Nav = () => {

  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <IconButton 
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            className={classes.menuButton}
            >
                <MoreHorizIcon />
            </IconButton>
            <Popper 
            open={open} 
            anchorEl={anchorRef.current} 
            role={undefined} transition disablePortal
            >
            {({ TransitionProps, placement }) => (
            <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper className={classes.paper}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                     {/* home */}
                     <Link component={RouterLink} to="/"><MenuItem onClick={handleClose} className={classes.menuItems}>HOME</MenuItem></Link >
                    {/* projects */}
                    <Link component={RouterLink} to="/projects"><MenuItem onClick={handleClose} className={classes.menuItems}>PROJECTS</MenuItem></Link>
                    {/* contact */}
                    <Link component={RouterLink} to="/contact"><MenuItem onClick={handleClose} className={classes.menuItems}>CONTACT</MenuItem></Link>
                    {/* about */}
                    <Link component={RouterLink} to="/about"><MenuItem onClick={handleClose} className={classes.menuItems}>ABOUT ME</MenuItem></Link>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
            )}
            </Popper>
            <Typography variant="h6" className={classes.title}>
            </Typography>
            <Button color="secondary" href='https://github.com/mercedeswalsh/' target='_blank'><GitHubIcon/></Button>
            <Button color="secondary" href='https://www.linkedin.com/in/mercedesswalsh/' target='_blank'><LinkedInIcon/></Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Nav
import React from 'react'
import { Link } from 'react-router-dom'
// mui imports
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Nav = () => {

  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="secondary" aria-label="menu">
                <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>
            </IconButton>
            <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            <MenuItem onClick={handleClose}><Link to='/About'></Link>About</MenuItem>
            <MenuItem onClick={handleClose}><Link to='/Projects'></Link>Projects</MenuItem>
            <MenuItem onClick={handleClose}><Link to='/Contact'></Link>Contact</MenuItem>
            </Menu>
            <Typography variant="h6" className={classes.title}>
            </Typography>
            <Button color="secondary" href='https://github.com/mercedeswalsh/' target='_blank'><GitHubIcon/></Button>
            <Button color="secondary" href='https://www.linkedin.com/in/mercedesswalsh/' target='_blank'><LinkedInIcon/></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav
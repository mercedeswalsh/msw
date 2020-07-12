import React from 'react'
// mui imports
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
// image
import sfswing from './images/sfswing.jpeg'
import afterlight from './images/afterlight.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        fontFamily: 'Montserrat',
        content: {
            flex: '1 0 auto'
        },
        cover: {
            width: 151,
        },
    }
}))

const PhotoCard = () => {
    const classes = useStyles()
    const theme = useTheme()

    return (
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            component="img"
            alt="san francisco swing"
            height="225"
            image={sfswing}
            title="san francisco swing"
            />
        </CardActionArea>
      </Card>
    )
}

export default PhotoCard
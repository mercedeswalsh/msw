import React from 'react'
// mui imports
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardActionArea from '@material-ui/core/CardActionArea'
// image
import afterlight from './images/afterlight.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        fontFamily: 'Montserrat',
        content: {
            flex: '1 0 auto'
        },
        cover: {
            width: 151
        }
        },
    image: {
        width: '100%',
    }
}))

const PhotoCard = () => {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.image}
            component="img"
            alt="san francisco swing"
            height="225"
            image={afterlight}
            title="san francisco swing"
            />
            
        </CardActionArea>
      </Card>
    )
}

export default PhotoCard
import React from 'react'
// mui imports
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import sfswing from './images/sfswing.jpeg'

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

const ObjectiveCard = () => {
    const classes = useStyles()
    const theme = useTheme()

    return (
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="200"
            image={sfswing}
            title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    mercedessierra.io
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                bla bla bla
                </Typography>
            </CardContent>
        </CardActionArea>
      </Card>
    )
}

export default ObjectiveCard
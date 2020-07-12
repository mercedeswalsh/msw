import React from 'react'
// mui imports
import { makeStyles } from '@material-ui/core/styles'
// npm 
import CypherText from 'react-cypher-text-loop'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      fontFamily: 'Montserrat',
      fontSize: '230%',
      color: '#fff',
      alignContent: 'center',
      justifyContent: 'center'
    },
  }))

const Hi = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
          
            <CypherText textList={["hi :)", "i'm mercedes"]} delay={2000}/>

        </div>
    )
}

export default Hi
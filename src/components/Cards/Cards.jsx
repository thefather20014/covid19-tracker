import React from 'react'
import { Card, Typography, Grid, makeStyles } from '@material-ui/core';
import CountUp from 'react-countup'
import cx from 'classnames';
import styles from './Cards.module.css'

const useStyles = makeStyles({
    root: {
        color: 'rgb(108,107,108)'
    },
});


const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    const classes = useStyles();

    if (!confirmed) {
        return <Typography variant="h2">Not Info <span role="img" aria-label="emoji">🤦‍♂️</span></Typography>
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={5} justify="center">

                <Grid item xs={ 12 } md={ 3 } className={ cx(styles.infected, styles.card, 'animate__animated animate__fadeIn animate') } component={Card}>
                    <Typography className={classes.root} gutterBottom>Infected</Typography>
                    <Typography variant="h5">
                        <CountUp
                            start={0}
                            end={confirmed.value}
                            duration={2.5}
                            separator=","
                        />
                    </Typography>
                    <Typography className={classes.root}> {new Date(lastUpdate).toDateString()} </Typography>
                    <Typography variant="body2">Number of infected of COVID-19</Typography>
                </Grid>

                <Grid item component={Card} xs={ 12 } md={ 3 } className={ cx(styles.recovered, styles.card, 'animate__animated animate__fadeIn animate') }>
                    <Typography className={classes.root} gutterBottom>Recovered</Typography>
                    <Typography variant="h5">
                        <CountUp
                            start={0}
                            end={recovered.value}
                            duration={2.5}
                            separator=","
                        />
                    </Typography>
                    <Typography className={classes.root}> {new Date(lastUpdate).toDateString()} </Typography>
                    <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                </Grid>

                <Grid item component={Card} xs={ 12 } md={ 3 } className={ cx(styles.deaths, styles.card, 'animate__animated animate__fadeIn animate') }>
                    <Typography className={classes.root} gutterBottom>Deaths</Typography>
                    <Typography variant="h5">
                        <CountUp
                            start={0}
                            end={deaths.value}
                            duration={2.5}
                            separator=","
                        />
                    </Typography>
                    <Typography className={classes.root}> {new Date(lastUpdate).toDateString()} </Typography>
                    <Typography variant="body2">Number of  deaths caused by COVID-19</Typography>
                </Grid>

            </Grid>
        </div>
    )
}

export default Cards

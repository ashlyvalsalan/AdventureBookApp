import React from 'react'
import{Grid, Paper} from "@material-ui/core";
import "../../src/App.css"

// import classes from '*.module.css';
import {makeStyles} from "@material-ui/core/styles";
import { blue, grey } from '@material-ui/core/colors';
const useStyles= makeStyles((theme)=>({
    grid:{
        width:'100%',
        marginRight: '0px',
        color:'red'
    },
    paper:{
        width:'100%',
        padding:theme.spacing(4),
        textAlign:"left",
        color:'red',
        fontSize:'30px',
        background:'grey',
        fontWeight:"bold",
        fontFamily:"italic",
        
    }   
}));
export function Nav(){
    const classes= useStyles();
    return(
     <Grid container spacing={2} className={classes.grid}>
         <Grid item xs={12} md={12}>
             <Paper className={classes.paper}>AdventureBook</Paper>
         </Grid>
     </Grid>
    );
}
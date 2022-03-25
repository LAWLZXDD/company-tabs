import React from "react";
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper';

function Tdyglance() {

    return (
        <Grid item md={6} xs={12} className="glance-tdy-table">
            <Paper elevation={0} style={{ 'text-align': 'center' }} className="glance-table-subheader">TDY</Paper>
        </Grid>
    )
}

export default Tdyglance
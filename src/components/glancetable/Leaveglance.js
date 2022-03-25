import React from "react";
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper';

function Leaveglance() {

    return (
        <Grid item md={6} xs={12} className="glance-onleave-table">
            <Paper elevation={0} style={{ 'text-align': 'center' }} className="glance-table-subheader">On Leave</Paper>
        </Grid>
    )
}

export default Leaveglance
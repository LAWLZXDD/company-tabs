import React from "react";
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper';

function Taskingglance() {

    return (
        <Grid item md={6} xs={12} className="glance-tasking-table">
            <Paper elevation={0} style={{ 'text-align': 'center' }} className="glance-table-subheader">Taskings(TODO)</Paper>
        </Grid>
    )
}

export default Taskingglance
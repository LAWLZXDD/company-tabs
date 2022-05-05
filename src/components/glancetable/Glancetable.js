import React from "react";
import Grid from '@mui/material/Grid'
import Availglance from "./Availglance";
import Taskingglance from "./Taskingglance";
import Leaveglance from "./Leaveglance";
import Tdyglance from "./Tdyglance";

function Glancetable() {

    return (

        <Grid container className="glancetable">
            <Availglance />
            <Taskingglance />
            <Leaveglance />
            <Tdyglance />
        </Grid>
    )
}


export default Glancetable
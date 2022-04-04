import React, { useState } from "react";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker } from "@mui/lab";
import { TextField } from "@mui/material";

function ProjectionDate(){

    const [date, setDate] = useState('');

    return(
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label="Projected Arrival Date"
                // openTo="year"
                views={['year', 'month', 'day']}
                value={date}
                onChange={(newDate) => { setDate(newDate) }}
                renderInput={(params) => <TextField {...params} />}
             />   
        </LocalizationProvider>
    )
}

export default ProjectionDate;
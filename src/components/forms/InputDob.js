import React, { useState } from "react";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker } from "@mui/lab";
import { TextField } from "@mui/material";

function DateOfBirth(){

    const [date, setDate] = useState('');

    return(
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                disableFuture
                label="Date of Birth"
                openTo="year"
                views={['year', 'month', 'day']}
                value={date}
                onChange={(newDate) => { setDate(newDate) }}
                renderInput={(params) => <TextField {...params} />}
             />   
        </LocalizationProvider>
    )
}

export default DateOfBirth;
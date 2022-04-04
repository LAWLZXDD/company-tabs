import React from "react";
import { useState } from "react";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from "@mui/material/TextField";

function CtrGrade() {

    const [hiringCompany, setHiringCompany] = useState('');

    return (
        <>
            <FormControl sx={{ m: 1, minWidth: 50}}>
                <InputLabel id="grade">Grade</InputLabel>
                <Select
                    disabled
                    required
                    defaultValue="CTR"
                    variant="standard"
                    labelId="grade"
                    value='CTR'
                >
                    <MenuItem value='CTR'>CTR</MenuItem>
                </Select>
            </FormControl >
            <FormControl sx={{ m: 1, minWidth: 200 }}>
            <TextField
                required
                variant="standard"
                id="hiringcompany"
                label="Contracting Company"
                value={hiringCompany}
                onChange={e => setHiringCompany(e.target.value)}
            />
            </FormControl>
        </>
    )
}

export default CtrGrade;
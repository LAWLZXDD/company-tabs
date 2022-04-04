import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";


function DutyPosition(){

    const [dutyPosition, setDutyPosition] = useState('');

    return(
        <FormControl sx={{ m: 1, minWidth: 100 }}>
            <InputLabel id="dutyposition">Position</InputLabel>
            <Select
                required
                variant="standard"
                labelId="dutyposition"
                value={dutyPosition}
                onChange={e => setDutyPosition(e.target.value)}
            >
                <MenuItem value="instructor">Instructor</MenuItem>
                <MenuItem value="ncoic">NCOIC</MenuItem>
                <MenuItem value="first-sergeant">1SG</MenuItem>
                <MenuItem value="exec-officer">XO</MenuItem>
                <MenuItem value="commander">Commander</MenuItem>
            </Select>
        </FormControl>
    )
}

export default DutyPosition;
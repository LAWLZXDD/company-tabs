import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import React, { useState } from "react";
import ProjectionDate from "./Projectiondate";


function DutyStatus() {

    const [dutyStatus, setDutyStatus] = useState('');

    return (
        <>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="dutystatus">Duty Status</InputLabel>
                <Select
                    required
                    variant="standard"
                    labelID="dutystatus"
                    value={dutyStatus}
                    onChange={e => setDutyStatus(e.target.value)}
                >
                    <MenuItem value="present">Present</MenuItem>
                    <MenuItem value="projected">Projected</MenuItem>
                </Select>
            </FormControl>
            <FormControl>

                {
                    (dutyStatus === 'projected' ?
                        <div>
                            <ProjectionDate />
                        </div> : null)
                }
            </FormControl>
        </>

    )
}

export default DutyStatus;
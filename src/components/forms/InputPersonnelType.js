import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

import MilGrade from './MilGrade';
import CtrGrade from './CtrGrade';
import DacGrade from './DacGrade';

function PersonnelType(){

    const [personType, setPersonType] = useState('');

    return(
        <>
        <FormControl sx={{ m: 1, minWidth: 150}}>
            <InputLabel id="personneltype">Personnel Type</InputLabel>
            <Select
                required
                variant="standard"
                labelID="personneltype"
                value={personType}
                onChange={e => setPersonType(e.target.value)}
            >
                <MenuItem value="mil">Military</MenuItem>
                <MenuItem value="dac">DA Civilian</MenuItem>
                <MenuItem value="ctr">Contractor</MenuItem>
            </Select>
        </FormControl>
        <FormControl>
                        {
                (personType === "mil" ?
                    <div>
                        <MilGrade />
                    </div> :
                    null)
            }
            {
                (personType === "dac" ?
                    <div>
                        <DacGrade /> 
                    </div> : 
                    null)
            }
            {
                (personType === "ctr" ?
                    <div>
                        <CtrGrade /> 
                    </div> : 
                    null)
            }
        </FormControl>
        </>
    )
}

export default PersonnelType
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import React, { useState } from "react";

function PersonnelType(){

    const [personType, setPersonType] = useState('');


    return(
        
        <FormControl>
            <InputLabel id="personneltype">Affiliation</InputLabel>
            <Select
                required
                variant="standard"
                labelID="personneltype"
                value={personType}
                onChange={e => setPersonType(e.target.value)}
            >
                <MenuItem value="mil">Military</MenuItem>
                <MenuItem value="dac">DAC</MenuItem>
                <MenuItem value="ctr">CTR</MenuItem>
            </Select>


            {/* If personnelType == mil => display only Mil Ranks/Grades
                else if ptype == dac => display only DAC Grades
                else ptype = CTR
            */}








        </FormControl>
        
    )
}

export default PersonnelType
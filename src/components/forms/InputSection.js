import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select from '@mui/material/Select';
import React, { useState } from "react";

function InputSection(){

    const [section, setSection] = useState('');

    return(

        <FormControl sx={{ m: 1, minWidth: 150 }}>
            <InputLabel id="section">Assign Section</InputLabel>
                <Select
                    required 
                    variant="standard"
                    labelId="section"
                    value={section}
                    onChange={e => setSection(e.target.value)}
                >
                    <MenuItem value="section1">Section 1</MenuItem>
                    <MenuItem value="section2">Section 2</MenuItem>
                    <MenuItem value="seciton3">Section 3</MenuItem>
                    <MenuItem value="section4">Section 4</MenuItem>
                    <MenuItem value="section5">Section 5</MenuItem>
                </Select>
        </FormControl>

    )
}

export default InputSection;
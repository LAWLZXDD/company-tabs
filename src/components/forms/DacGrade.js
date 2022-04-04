import React from "react";
import { useState } from "react";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function DacGrade() {

    const [grade, setGrade] = useState('')

    const gradeSystem = [
        { grade: 'GS1'},
        { grade: 'GS2'},
        { grade: 'GS3'},
        { grade: 'GS4'},
        { grade: 'GS5'},
        { grade: 'GS6'},
        { grade: 'GS7'},
        { grade: 'GS8'},
        { grade: 'GS9'},
        { grade: 'GS10'},
        { grade: 'GS11'},
        { grade: 'GS12'},
        { grade: 'GS13'},
        { grade: 'GS14'},
        { grade: 'GS15'}
    ]

    return (
        <>
            <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel id="grade">Grade</InputLabel>
                <Select
                    required
                    variant="standard"
                    labelId="grade"
                    value={grade}
                    onChange={e => setGrade(e.target.value)}
                >
                    {gradeSystem.map((info, index) => (
                        <MenuItem key={index} value={info.grade}>{info.grade}</MenuItem>
                    ))}
                </Select>
            </FormControl >
        </>
    )
}

export default DacGrade;
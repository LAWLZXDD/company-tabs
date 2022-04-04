import React from "react";
import { useState, useEffect } from "react";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function MilGrade() {

    const [grade, setGrade] = useState('')
    const [rank, setRank] = useState('');

    

    const gradeSystem = [
        { grade: 'E1', rank: 'PVT' },
        { grade: 'E2', rank: 'PV2' },
        { grade: 'E3', rank: 'PFC' },
        { grade: 'E4', rank: 'SPC' },
        { grade: 'E5', rank: 'SGT' },
        { grade: 'E6', rank: 'SSG' },
        { grade: 'E7', rank: 'SFC' },
        { grade: 'E8', rank: '1SG' },
        { grade: 'W1', rank: 'WO1' },
        { grade: 'W2', rank: 'WO2' },
        { grade: 'W3', rank: 'WO3' },
        { grade: 'W4', rank: 'WO4' },
        { grade: 'W5', rank: 'WO5' },
        { grade: 'O1', rank: '2LT' },
        { grade: 'O2', rank: '1LT' },
        { grade: 'O3', rank: 'CPT' }
    ]

    useEffect(() => {
        setRank(() => {
            for(let i = 0; i < gradeSystem.length; i++){
                if(grade === gradeSystem[i].grade){
                    return gradeSystem[i].rank;
                }
            }
        });
      }, [grade]);


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
            <FormControl sx={{ m: 1, minWidth: 100 }}>
                <InputLabel id="rank">Rank</InputLabel>
                <Select 
                    disabled
                    variant="standard"
                    labelId="rank"
                    // defaultValue="PVT"
                    value={rank}
                    
                >
                    <option value={rank}>{rank}</option>
                </Select>
            </FormControl>
        </>
    )
}

export default MilGrade;
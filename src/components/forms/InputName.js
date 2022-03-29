import React from "react";
import { useState } from "react";
import { FormControl, TextField } from "@mui/material";

function InputName() {


    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');


    return (
        <FormControl sx={{ m: 1, minWidth: 100 }}>
            <TextField
                required
                variant="standard"
                id="firstname"
                label="First Name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
            />

            <TextField
                required
                variant="standard"
                id="middlename"
                label="Middle Name"
                value={middleName}
                onChange={e => setMiddleName(e.target.value)}
            />
            <TextField
                required
                variant="standard"
                id="lastname"
                label="Last Name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
            />
        </FormControl>
    )
}

export default InputName;
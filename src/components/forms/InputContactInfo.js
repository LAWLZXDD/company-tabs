import React from "react";
import { useState } from "react";
import { FormControl, TextField} from "@mui/material";

function InputContactInfo() {


    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');


    return (
        <FormControl sx={{ m: 1, minWidth: 100 }}>
            <TextField
                required
                type="email"
                variant="standard"
                id="email"
                label="Work Email"
                placeholder="xxxxx@xxxx.xxx"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />

            <TextField
                label="Contact Number"
                required
                type="tel"
                inputProps={{inputMode: 'numeric', pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}'}}
                variant="standard"
                id="phonenumber"
                placeholder="XXX-XXX-XXXX"
                helperText="Format: XXX-XXX-XXXX"
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
            />
        </FormControl>
    )
}

export default InputContactInfo;
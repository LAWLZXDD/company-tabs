import { Box, Button, IconButton, Modal, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close'
import { Grid } from '@mui/material';

import InputName from "./InputName";
import InputSection from "./InputSection";
import InputContactInfo from './InputContactInfo';
import InputDob from './InputDob';
import PersonnelType from './InputPersonnelType';
import DutyStatus from './DutyStatus';
import DutyPosition from './DutyPosition';
import TestForm from './TestForm';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const buttonStyle = {
    color: 'black',
    height: '3rem',
    width: '100%',
    'font-weight': 'bold'
}

function AddPersonnelModal() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function handleSubmit(e) {
        e.preventDefault()

        let formData = {};
        let el = e.target.elements;

        for (let i = 0; i < el.length; i++) {
            const idName = el[i].id;
            el[i].value && idName &&
                (formData[idName] = el[i].value);
        }
        console.log(formData)
        formSubmit(formData)
        alert('User Info created on Database')
        handleClose();
    }

    function formSubmit(data) {
        fetch('http://localhost:3001/', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <Box>

            <Button onClick={handleOpen}
                id="action-button"
                sx={buttonStyle}
            > Add Personnel
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
            >

                <Box sx={style} id='formentrybox'>
                    <IconButton onClick={handleClose}
                        sx={{ 'display': 'flex', 'margin-left': 'auto' }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Grid>
                        <Box>
                            <Typography id="modal-modal-title" variant='h6' component="h2"
                                sx={{ 'text-align': 'center', 'margin-bottom': '10px', 'border-bottom': '1px solid black' }}
                            >
                                Add Personnel Form
                            </Typography>

                        </Box>

                    </Grid>
                    {/* FORM STARTS HERE */}
                    <Grid>
                        <form onSubmit={handleSubmit}>

                            {/* <Box>
                                <PersonnelType />
                            </Box>
                            <Box>
                                <DutyStatus />
                            </Box>
                            <Box>
                                <InputSection />
                                <DutyPosition />
                            </Box>
                            <Box>
                                <InputName />
                                <InputDob />
                            </Box>

                            <Box>
                                <InputContactInfo />
                            </Box> */}

                            <TestForm />

                            <button type="submit">Submit</button>
                        </form>
                    </Grid>
                </Box>
            </Modal>
        </Box>

    )
}

export default AddPersonnelModal;
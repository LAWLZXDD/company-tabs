import { Box, Button, IconButton, Modal, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import AddPersonnelForm from './AddPersonnelForm';
import CloseIcon from '@mui/icons-material/Close'
import { Grid } from '@mui/material';


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

                <Box sx={style}>
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
                    <AddPersonnelForm />
                </Box>
            </Modal>
        </Box>

    )
}

export default AddPersonnelModal;
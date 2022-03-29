import React from "react";
import Button from '@mui/material/Button'
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box'
import AddPersonnelModal from "./forms/AddPersonnelModal";

//temporary styling
const buttonStyle = {
    color: 'black',
    height: '3rem',
    width: '100%',
    'font-weight': 'bold'
}

function Actionbuttons() {

    const personnelAction = [
        { title: "Edit Personnel" },
        { title: "Remove Personnel" }
    ]

    const buttonRender = (buttonInfo, index) => {
        return (
            <Box>
                <Button
                    id="action-button"
                    key={index}
                    sx={buttonStyle}
                >
                    {buttonInfo.title}
                </Button>
            </Box>
        )
    }

    return (
        <>
            <div className="homepage">
                <Grid id="buttoncontainer">
                    <AddPersonnelModal />
                    {personnelAction.map(buttonRender)}
                </Grid>
            </div>

        </>

    )
}

export default Actionbuttons
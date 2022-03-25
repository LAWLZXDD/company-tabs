import React from "react";
import Button from '@mui/material/Button'
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box'


function Actionbuttons() {

    const personnelAction = [
        { title: "Add Personnel" },
        { title: "Edit Personnel" },
        { title: "Remove Personnel" }
    ]

    const buttonRender = (buttonInfo, index) => {
        return (
            <Box>
                <Button
                    id="action-button"
                    key={index}
                    sx={{
                        color: 'black',
                        height: '3rem',
                        width: '100%',
                        'font-weight': 'bold'
                    }}
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
                    {personnelAction.map(buttonRender)}
                </Grid>
            </div>

        </>

    )
}

export default Actionbuttons
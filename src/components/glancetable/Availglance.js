import React from "react";
import Grid from '@mui/material/Grid'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function tempData(section, totalIn, avail) {
    return { section, totalIn, avail }
}

const sectionNames = {name: ''}

const rows = [
    tempData('Company', 100, 70),
    tempData('Section 1', 25, 10),
    tempData('Section 2', 25, 15),
    tempData('Section 3', 25, 20),
    tempData('Section 4', 25, 25)
]

function Availglance(){

    return(

        <Grid item xs={12} md={6} className="glance-avail-table">
                <Paper elevation={0} style={{ 'text-align': 'center' }} className="glance-table-subheader">Available</Paper>
                <TableContainer style={{ 'border-bottom': 'black solid 1px' }}>
                    <Table style={{border: 'black solid 1px'}}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">{sectionNames.name}</TableCell>
                                <TableCell align="center">Total In</TableCell>
                                <TableCell align="center">Available</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.totalIn}>
                                    <TableCell component="th" scope="row" align="center">
                                        {row.section}
                                    </TableCell>
                                    <TableCell align="center">{row.totalIn}</TableCell>
                                    <TableCell align="center">{row.avail}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

    )
}

export default Availglance
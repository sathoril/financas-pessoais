import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Box, TableContainer } from '@mui/material';

function createData(
    hour: string,
    valueSpent: number,
) {
    return { hour, valueSpent };
}

const rows = [
    createData('11:50', 6),
    createData('13:00', 237),
    createData('13:30', 262),
    createData('14:00', 305),
    createData('16:00', 356),
];

export default function TabelaDeResumoDiario() {
    return (
                <TableContainer component={Paper}>
                    <Table aria-label="tabela-resumo-diario">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Horário</TableCell>
                                <TableCell align="center">Valor (R$)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.hour}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" align="center">
                                        {row.hour}
                                    </TableCell>
                                    <TableCell align="center">R$ {row.valueSpent.toFixed(2)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
    );
}
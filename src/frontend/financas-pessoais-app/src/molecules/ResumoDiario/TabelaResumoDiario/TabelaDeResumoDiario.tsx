import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, TableContainer, Typography } from '@mui/material';
import TabelaResumoDiarioResponse from '../../../models/TabelaResumoDiarioResponse';
import {formatHour, formatMoney} from "../../../shared/utils";

export default function TabelaDeResumoDiario() {
    const [rows, setRows] = useState<TabelaResumoDiarioResponse[]>([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setError(false);
            try {
                const response = await fetch('https://localhost:7214/api/resumodiario');
                if (response.ok) {
                    const data = await response.json();
                    setRows(TabelaResumoDiarioResponse.fromApiResponse(data));
                } else {
                    throw new Error('Erro ao processar');
                }
            } catch {
                setError(true);
            }
        };

        fetchData();
    }, []);

    return (
        <Box>
            {error && (
                <Typography color="error" sx={{ marginBottom: 2 }}>
                    Erro ao processar
                </Typography>
            )}
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
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" align="center">
                                    {formatHour(row.hour)}
                                </TableCell>
                                <TableCell align="center">{formatMoney(row.valueSpent)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

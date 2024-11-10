import * as React from "react";
import {Box, Typography } from "@mui/material";
import {useEffect, useState} from "react";
import TabelaResumoDiarioResponse from "../../../models/TabelaResumoDiarioResponse";
import CabecalhoResumoDiarioResponse from "../../../models/CabecalhoResumoDiarioResponse";
import {formatMoney} from "../../../shared/utils";

export default function CabecalhoResumoDiario() {
    const [cabecalho, setCabecalho] = useState<CabecalhoResumoDiarioResponse>();
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setError(false);
            try {
                const response = await fetch('https://localhost:7214/api/resumodiario/cabecalho');
                if (response.ok) {
                    const data = await response.json();
                    setCabecalho(CabecalhoResumoDiarioResponse.fromApiResponse(data));
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
        <>
            <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
                <Typography variant="body1">Valor em Conta</Typography>
                <Typography variant="body2">{formatMoney(cabecalho?.availableValue)}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
                <Typography variant="body1">Valor Total Gasto</Typography>
                <Typography variant="body2">{formatMoney(cabecalho?.totalSpent)}</Typography>
            </Box>
        </>
    )
}
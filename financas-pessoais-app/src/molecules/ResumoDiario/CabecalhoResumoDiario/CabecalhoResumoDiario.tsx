import * as React from "react";
import {Box, Typography } from "@mui/material";

export default function CabecalhoResumoDiario() {
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
                <Typography variant="body1">Valor em Conta</Typography>
                <Typography variant="body2"> R$ 500,00</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
                <Typography variant="body1">Valor Total Gasto</Typography>
                <Typography variant="body2"> R$ 1.500,00</Typography>
            </Box>
        </>
    )
}
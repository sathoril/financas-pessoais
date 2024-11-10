import * as React from 'react';
import Container from "@mui/material/Container";
import TabelaDeResumoDiario from '../../molecules/ResumoDiario/TabelaResumoDiario/TabelaDeResumoDiario';

import CabecalhoResumoDiario from "../../molecules/ResumoDiario/CabecalhoResumoDiario";
import { Box } from '@mui/material';
import BotaoAdicaoDeGasto from "../../molecules/ResumoDiario/BotaoAdicaoDeGasto";

export default function ResumoDiario() {
    const [reload, setReload] = React.useState(false);

    const handleReload = () => setReload((prev) => !prev);

    return (
        <Container>
            <Box sx={{ flex: 1, padding: 2, position: "relative" }}>
                <CabecalhoResumoDiario />
                <TabelaDeResumoDiario />
                <BotaoAdicaoDeGasto onAddSuccess={handleReload} />
            </Box>
        </Container>
    );
}

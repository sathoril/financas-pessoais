import { Fab, Button, TextField, FormHelperText } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { NumericFormat } from "react-number-format";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '8px',
};

export default function BotaoAdicaoDeGasto({ onAddSuccess }: { onAddSuccess: () => void }) {
    const [openModal, setOpenModal] = useState(false);
    const [entrada, setEntrada] = useState(0);
    const [saida, setSaida] = useState(0);
    const [error, setError] = useState('');

    const handleOpenModal = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (entrada <= 0 && saida <= 0) {
            setError("Pelo menos um campo precisa ter valor maior que zero.");
            return;
        }

        if (entrada < 0 || saida < 0) {
            setError("Valores não podem ser negativos.");
            return;
        }

        setError('');

        try {
            const response = await fetch('https://localhost:7214/api/resumodiario/adicionar', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ valorRecebido: entrada * 100, valorGasto: saida * 100 }),
            });

            if (response.ok) {
                handleClose();
                onAddSuccess();
            } else {
                throw new Error('Erro ao processar');
            }
        } catch {
            setError('Erro ao processar');
        }
    };

    return (
        <>
            <Fab
                color="primary"
                aria-label="add"
                sx={{ position: "absolute", bottom: 25, right: 25 }}
                onClick={handleOpenModal}
            >
                <AddIcon />
            </Fab>
            <Modal open={openModal} onClose={handleClose}>
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{ marginBottom: '15px' }}>
                        Adicionar Gasto
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <NumericFormat
                            label="Entrada"
                            value={entrada}
                            prefix='R$ '
                            thousandSeparator='.'
                            decimalSeparator=','
                            allowNegative={false}
                            decimalScale={2}
                            fullWidth
                            sx={{ marginBottom: 2 }}
                            customInput={TextField}
                            error={!!error}
                            onValueChange={(values, sourceInfo) => {
                                if (values.floatValue)
                                    setEntrada(values.floatValue);
                            }}
                            variant='outlined'
                            fixedDecimalScale
                        />
                        <NumericFormat
                            label="Saída"
                            value={saida}
                            prefix='R$ '
                            thousandSeparator='.'
                            decimalSeparator=','
                            allowNegative={false}
                            decimalScale={2}
                            fullWidth
                            sx={{ marginBottom: 2 }}
                            customInput={TextField}
                            error={!!error}
                            onValueChange={(values, sourceInfo) => {
                                if (values.floatValue)
                                    setSaida(values.floatValue);
                            }}
                            variant='outlined'
                            fixedDecimalScale
                        />
                        {error && (
                            <FormHelperText error>{error}</FormHelperText>
                        )}
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            Enviar
                        </Button>
                    </form>
                </Box>
            </Modal>
        </>
    );
}

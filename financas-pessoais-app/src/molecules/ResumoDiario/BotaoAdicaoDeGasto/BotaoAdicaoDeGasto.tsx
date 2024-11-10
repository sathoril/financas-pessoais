import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {useState} from "react";

export default function BotaoAdicaoDeGasto() {
    const [openModal, setOpenModal] = useState(false);
    const [valor, setValor] = useState(0);

    const handleOpenModal = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    return (
        <>
            <Fab
                color="primary"
                aria-label="add"
                sx={{ position: "absolute", bottom: 25, right: 25}}
                onClick={handleOpenModal}
            >
                <AddIcon />
            </Fab>
        </>
    )
}
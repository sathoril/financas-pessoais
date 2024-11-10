import styled from "styled-components";
import TableContainer from "@mui/material/TableContainer";
import {TableContainerProps} from "@mui/material/TableContainer/TableContainer";
import Box from "@mui/material/Box";
import {BoxProps} from "@mui/material/Box/Box";

export const BoxFlex = styled(Box)<BoxProps>`
    display: flex;
`

export const BoxAuto = styled(Box)<BoxProps>`
    m: auto;
`;
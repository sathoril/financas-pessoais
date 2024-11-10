import React from 'react'
import NavBar from "./components/menu/NavBar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppRoutes from "./routes/AppRoutes";

const theme = createTheme({
    palette: {
        primary: {
            main: '#208229',
            dark: '#026315',
            light: '#42b448',
        }
    },
});

const App: React.FC = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <NavBar />
                <AppRoutes />
            </ThemeProvider>
        </>
    )
}

export default App
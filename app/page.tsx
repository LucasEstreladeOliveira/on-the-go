'use client'
import Navbar from "./components/navbar";
import Header from "./components/header";
import Container from "./components/main-container";
import { ThemeProvider } from "@emotion/react";
import { customTheme } from './components/customTheme';
import { HomeDataContextProvider } from "./context/home/home-context";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <ThemeProvider theme={customTheme}>
      <main>
        <HomeDataContextProvider>
          <Navbar />
          <Box>
            <Header />
            <Container />
          </Box>
        </HomeDataContextProvider>
      </main>
    </ThemeProvider>
  );
}

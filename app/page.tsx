'use client'
import Navbar from "./components/navbar";
import Header from "./components/header";
import Container from "./components/main-container";
import { ThemeProvider } from "@emotion/react";
import { customTheme } from './components/customTheme';
import { HomeDataContextProvider } from "./context/home/home-context";

export default function Home() {
  return (
    <ThemeProvider theme={customTheme}>
      <main>
        <HomeDataContextProvider>
          <Navbar />
          <Header />
          <Container />
        </HomeDataContextProvider>
      </main>
    </ThemeProvider>
  );
}

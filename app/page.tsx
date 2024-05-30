'use client'
import Navbar from "./components/navbar";
import Header from "./components/header";
import Container from "./components/main-container";
import { ThemeProvider } from "@emotion/react";
import { customTheme } from './components/customTheme';

export default function Home() {
  return (
    <ThemeProvider theme={customTheme}>
      <main>
        <Navbar />
        <Header />
        <Container />
      </main>
    </ThemeProvider>
  );
}

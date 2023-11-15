import Box from "@/components/Box";
import { useTheme } from "@/theme/ThemeProvider";
import Head from "next/head";
import Header from "./patterns/Header";
import Banner from "./patterns/Banner";
import Skills from "./patterns/Skills";
import Projetos from "./patterns/Projetos";
import Sobre from "./patterns/Sobre";
import Footer from "./patterns/Footer";

export default function HomePage() {
  const theme = useTheme();

  return (
    <>
      <Head><title>@ricmrs</title></Head>
      <Header />
      <Box tag="main"
        styleSheet={{
          flex: 1,
          alignItems: 'center',
        }}
      >
        <Banner />
        <Skills />
        <Projetos />
        <Sobre />
      </Box>
      <Footer />
    </>
  )
}

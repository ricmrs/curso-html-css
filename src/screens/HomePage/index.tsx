import Box from "@/components/Box";
import { useTheme } from "@/theme/ThemeProvider";
import Head from "next/head";
import Header from "./patterns/Header";
import Banner from "./patterns/Banner";
import Skills from "./patterns/Skills";
import Projetos from "./patterns/Projetos";
import Sobre from "./patterns/Sobre";
import Footer from "./patterns/Footer";
import Link from "@/components/Link";
import Text from "@/components/Text";

export default function HomePage() {
  const theme = useTheme();

  return (
    <>
      <Head><title>@ricmrs</title></Head>
      <Header />
      <Box tag="main"
        styleSheet={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <Banner />
        <Skills />
        <Projetos />
        <Sobre />
      </Box>
      <Footer />
      <Box styleSheet={{ backgroundColor: theme.colors.neutral.x400, paddingVertical: "5px" }}>
        <Text
          variant="heading5" 
          styleSheet={{ 
            flexDirection: "row", 
            alignItems: "center", 
            justifyContent: "center",
            gap: "10px",
            color: theme.colors.neutral.x000
          }}
        >
          Icons by
          <Link 
            href='https://www.icons8.com.br' 
            colorVariant="neutral" 
            colorVariantEnabled 
            variant="heading5"
          >
            icons8
          </Link>
        </Text>
      </Box>
    </>
  )
}

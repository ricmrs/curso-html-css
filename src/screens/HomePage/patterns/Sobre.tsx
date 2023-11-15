import Box from "@/components/Box";
import Picture from "@/components/Picture";
import Text from "@/components/Text";
import { useTheme } from "@/theme/ThemeProvider";

export default function Sobre() {
  const theme = useTheme();

  return (
    <Box
      tag="section"
      id="sobre"
      styleSheet={{
        backgroundColor: theme.colors.primary.x600,
        width: "100%",
        alignItems: "center",
        borderBottom: "5px solid #000",
        height: { xs: "470px", xl: "560px"},
        paddingTop: { xs: "30px", xl: "40px" }
      }}
    >
      <Text tag="h2" variant="heading1" colorVariant="neutral" colorVariantEnabled>Sobre</Text>
      <Box 
        styleSheet={{ 
          flexDirection: "row",
          alignItems: "center", 
          justifyContent: "center", 
          marginTop: { xs: "30px", md: "40px", xl: "50px" }, 
          gap: {  xs: "0px", md: "45px", xl: "80px" } 
        }}
      >
        <Text variant="body" colorVariant="neutral" colorVariantEnabled
          styleSheet={{ textAlign: "justify", maxWidth: { xs: "85%", md: "410px", xl: "613px" } }}  
        >
          Graduado em engenharia civil e pós-graduado em engenharia de produção. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas. Fiz diversos cursos com foco em FrontEnd e BackEnd, além de cursos complementares de DevOps, UX/UI e Data Science pela Alura. Tenho conhecimentos na área de web development e estou em busca  de uma vaga como Desenvolvedor.
        </Text>
        <Picture alt="Profile image" 
          srcset={{ 
            md: "assets/profile-picture-182x258.png", 
            xl: "assets/profile-picture-225x303.png" 
          }} styleSheet={{ display: { xs: "none", md: "flex" }}}/>
      </Box>
    </Box>
  )
}

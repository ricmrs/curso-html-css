import { useTheme } from "@/theme/ThemeProvider";
import Box from "../Box";

export default function Projeto({ nome }: { nome: string}){
  const theme = useTheme();

  return (
    <Box 
      styleSheet={{ 
        width: "180px", 
        height: "180px", 
        boxShadow: "10px 10px 0px 0px #000",
        backgroundColor: theme.colors.accent.x050
      }}
    >
      {nome}
    </Box>
  )
}
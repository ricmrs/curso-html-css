import Box from "@/components/Box";
import Text from "@/components/Text";
import { useTheme } from "@/theme/ThemeProvider";

export default function Banner(){
  const theme = useTheme();

  return (
    <Box
      tag="section"
      styleSheet={{
        backgroundImage: "url('assets/banner-375x250.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: "250px",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: "5px solid #000",
      }}
    >
      <Box
        styleSheet={{
          backgroundColor: theme.colors.primary.x600 + "F2",
          boxShadow: "5px 5px 0px 0px #000",
          padding: "40px 30px",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px"
        }}
      >
        <Text tag="h1" variant="heading1" styleSheet={{ color: theme.colors.accent.x300, textShadow: "3px 3px 0px #000" }}>@ricmrs</Text>
        <Text tag="h2" variant="heading2" colorVariant="accent" colorVariantEnabled styleSheet={{ textShadow: "3px 3px 0px #000" }}>FullStack Dev</Text>
      </Box>
    </Box>
  )
}

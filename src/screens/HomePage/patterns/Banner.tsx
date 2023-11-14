import Box from "@/components/Box";
import Text from "@/components/Text";
import { useTheme } from "@/theme/ThemeProvider";
import useBreakpoints from "@/utils/mediaQueries/useBreakpoints";

export default function Banner() {
  const theme = useTheme();
  const { isMd } = useBreakpoints();

  return (
    <Box
      tag="section"
      styleSheet={{
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: "5px solid #000",
        backgroundImage: { xs: "url('assets/banner-375x250.png')", md: "url('assets/banner-768x512.png')" },
        height: { xs: "250px", md: "512px" }
      }}
    >
      <Box
        styleSheet={{
          backgroundColor: theme.colors.primary.x600 + "F2",
          boxShadow: "5px 5px 0px 0px #000",
          padding: { xs: "40px 30px", md: "50px 40px" },
          alignItems: "center",
          justifyContent: "center",
          gap: "20px"
        }}
      >
        <Text tag="h1" variant="heading1" styleSheet={{ color: theme.colors.accent.x300, textShadow: "3px 3px 0px #000" }}>{isMd ? "Ricardo Macedo" : "@ricmrs"}</Text>
        <Text tag="h2" variant="heading2" colorVariant="accent" colorVariantEnabled styleSheet={{ textShadow: "3px 3px 0px #000" }}>{isMd ? "FullStack Developer" : "FullStack Dev"}</Text>
      </Box>
    </Box>

  )
}

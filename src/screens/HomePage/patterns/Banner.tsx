import Box from "@/components/Box";
import Text from "@/components/Text";
import { useTheme } from "@/theme/ThemeProvider";
import useBreakpoints from "@/utils/mediaQueries/useBreakpoints";

export default function Banner() {
  const theme = useTheme();
  const { isXs, isSm } = useBreakpoints();
  const isSmallWindow = isXs || isSm;

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
        backgroundImage: { 
          xs: "url('assets/banner-375x250.png')", 
          md: "url('assets/banner-768x512.png')",
          xl: "url('assets/banner-1440x800.png')"
        },
        height: { xs: "250px", md: "512px", xl: "calc(100vh - 95px)" }
      }}
    >
      <Box
        styleSheet={{
          backgroundColor: theme.colors.primary.x600 + "F2",
          boxShadow: "5px 5px 0px 0px #000",
          alignItems: "center",
          justifyContent: "center",
          padding: { xs: "40px 30px", md: "50px 40px", xl: "60px 50px" },
          gap: { xs: "20px", md: "20px", xl: "35px" }
        }}
      >
        <Text tag="h1" variant="heading1" styleSheet={{ color: theme.colors.accent.x300, textShadow: "3px 3px 0px #000" }}>{!isSmallWindow ? "Ricardo Macedo" : "@ricmrs"}</Text>
        <Text tag="h2" variant="heading2" colorVariant="accent" colorVariantEnabled styleSheet={{ textShadow: "3px 3px 0px #000" }}>{!isSmallWindow ? "FullStack Developer" : "FullStack Dev"}</Text>
      </Box>
    </Box>

  )
}

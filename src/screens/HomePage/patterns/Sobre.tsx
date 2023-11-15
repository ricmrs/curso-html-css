import Box from "@/components/Box";
import Text from "@/components/Text";
import { useTheme } from "@/theme/ThemeProvider";

export default function Sobre(){
  const theme = useTheme();

  return (
    <Box
      tag="section"
      id="sobre"
      styleSheet={{
        backgroundColor: theme.colors.primary.x600,
        height: "380px",
        width: "100%",
        alignItems: "center",
        borderBottom: "5px solid #000",
        paddingTop: { xs: "30px", xl: "40px" }
      }}
    >
      <Text tag="h2" variant="heading1" colorVariant="neutral" colorVariantEnabled>Sobre</Text>
      <Text variant="body" colorVariant="neutral" colorVariantEnabled
        styleSheet={{
          marginHorizontal: { xs: "20px", xl: "50px" },
          paddingVertical: "35px"
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when  
      </Text>
    </Box>
  )
}

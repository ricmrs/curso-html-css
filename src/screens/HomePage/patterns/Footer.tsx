import Box from "@/components/Box";
import Icon from "@/components/Icon";
import Link from "@/components/Link";

export default function Footer(){
  return (
    <Box
      tag="footer"
      styleSheet={{
        backgroundColor: "#000",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: { xs: "60px", xl: "80px"}
      }}
    >
      <Box styleSheet={{ flexDirection: "row", gap: { xs: "90px", xl: "180px" } }}>
        <Link href="https://www.linkedin.com/in/ricardo-macedo-rosa-silva-bbbb22196/">
          <Icon name="linkedin" viewBox={[35, 35]}/>
        </Link>
        <Link href="https://github.com/ricmrs">
          <Icon name="github" viewBox={[35, 35]}/>
        </Link>
      </Box>
    </Box>
  )
}

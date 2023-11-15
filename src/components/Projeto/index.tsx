import { useTheme } from "@/theme/ThemeProvider";
import Box from "../Box";
import Image from "../Image";
import Link from "../Link";

interface ProjetoProps {
  nome: string;
  src: string;
  href: string;
}

export default function Projeto({ nome, src, href }: ProjetoProps) {
  const theme = useTheme();

  return (
    <Box
      styleSheet={{
        width: { xs: "180px", xl: "250px" },
        height: { xs: "180px", xl: "250px" },
        boxShadow: "10px 10px 0px 0px #000",
        backgroundColor: theme.colors.accent.x050,
        transition: "transform 150ms ease-out",
        hover: {
          transform: { md: "scale(1.1)" },
        }
      }}
    >
      <Link href={href}>
        <Image src={src} alt={nome} />
      </Link>
    </Box>
  )
}

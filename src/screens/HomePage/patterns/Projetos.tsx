import Box from "@/components/Box";
import MoveButton from "@/components/Button/MoveButton";
import Projeto from "@/components/Projeto";
import Text from "@/components/Text";
import { useTheme } from "@/theme/ThemeProvider";
import { useState } from "react";

export default function Projetos() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = 2;
  const stepWidth = 190;
  const stepGap = 20;

  return (
    <Box
      tag="section"
      id="projetos"
      styleSheet={{
        backgroundColor: theme.colors.primary.x200,
        height: "380px",
        width: "100%",
        alignItems: "center",
        borderBottom: "5px solid #000",
        paddingTop: "30px"
      }}
    >
      <Text tag="h2" variant="heading1" colorVariant="neutral" colorVariantEnabled>Projetos</Text>
      <Box styleSheet={{ flexDirection: "row", alignItems: "center", gap: "30px", paddingTop: "40px" }}>
        <MoveButton
          type="previous"
          onClick={() => setActiveStep(activeStep - 1)}
          disable={activeStep == 0}
          backgroundStyleSheets={{
            height: "40px",
            width: "40px",
            backgroundColor: theme.colors.primary.x600,
            visibility: `${activeStep == 0 ? "hidden" : "visible"}`,
            display: { xs: "flex", md: "none" }
          }}
          arrowStyleSheets={{ color: theme.colors.accent.x050 }}
        />
        <Box
          styleSheet={{
            flexDirection: "row",
            height: "190px",
            maxWidth: { xs: `${stepWidth}px`, md: "max-content" },
            overflow: { xs: "hidden", md: "visible" }
          }}
        >
          <Box
            styleSheet={{
              flexDirection: "row",
              gap:{ xs:  `${stepGap}px`, md: "35px" },
              transform: { xs: `translateX(${-activeStep * (stepWidth + stepGap/2)}px)`, md: "translateX(0)" },
              transition: { xs: "transform 500ms ease-in-out", md: "none" }
            }}
          >
            <Projeto nome="primeiro" />
            <Projeto nome="segundo" />
            <Projeto nome="terceiro" />
          </Box>
        </Box>
        <MoveButton
          type="next"
          onClick={() => setActiveStep(activeStep + 1)}
          disable={activeStep == maxSteps}
          backgroundStyleSheets={{
            height: "40px",
            width: "40px",
            backgroundColor: theme.colors.primary.x600,
            visibility: `${activeStep == maxSteps ? "hidden" : "visible"}`,
            display: { xs: "flex", md: "none" }
          }}
          arrowStyleSheets={{ color: theme.colors.accent.x050 }}
        />
      </Box>
    </Box>
  )
}

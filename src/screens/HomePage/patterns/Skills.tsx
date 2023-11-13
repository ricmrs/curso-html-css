import Box from "@/components/Box";
import MoveButton from "@/components/Button/MoveButton";
import Skill from "@/components/Skill";
import Text from "@/components/Text";
import { useTheme } from "@/theme/ThemeProvider";
import { useState } from "react";

export default function Skills() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = 3;
  const stepWidth = 265;

  return (
    <Box
      tag="section"
      id="skills"
      styleSheet={{
        backgroundColor: theme.colors.primary.x600,
        height: "540px",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: "5px solid #000",
      }}
    >
      <Text tag="h2" variant="heading1" colorVariant="neutral" colorVariantEnabled>Skills</Text>
      <Box styleSheet={{ flexDirection: "row", alignItems: "center", gap: "15px", paddingTop: "35px" }}>
        <MoveButton
          type="previous"
          onClick={() => setActiveStep(activeStep - 1)}
          disable={activeStep == 0}
          backgroundStyleSheets={{
            height: "35px",
            width: "35px",
            visibility: `${activeStep == 0 ? "hidden" : "visible"}`
          }} />
        <Box styleSheet={{ overflow: "hidden", maxWidth: `${stepWidth}px` }}>
          <Box
            styleSheet={{
              flexWrap: "wrap",
              maxHeight: "360px",
              transform: `translateX(${-activeStep * (stepWidth)}px)`,
              transition: "transform 500ms ease-in-out",
              columnGap: "15px"
            }}
          >
            <Skill name="html" progress={95} />
            <Skill name="css" progress={85} />
            <Skill name="js" progress={96} />
            <Skill name="nodejs" progress={70} />
            <Skill name="react" progress={90} />
            <Skill name="tdd" progress={80} />
            <Skill name="restApi" progress={85} />
            <Skill name="ux" progress={75} />
            <Skill name="angular" progress={60} />
            <Skill name="ts" progress={87} />
            <Skill name="nextjs" progress={92} />
            <Skill name="wordpress" progress={65} />
            <Skill name="mysql" progress={70} />
            <Skill name="java" progress={80} />
          </Box>
        </Box>
        <MoveButton
          type="next"
          onClick={() => setActiveStep(activeStep + 1)}
          disable={activeStep == maxSteps}
          backgroundStyleSheets={{
            height: "35px",
            width: "35px",
            visibility: `${activeStep == maxSteps ? "hidden" : "visible"}`
          }} />
      </Box>
    </Box>
  )
}

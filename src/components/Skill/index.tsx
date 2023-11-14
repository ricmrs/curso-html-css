import { StyleSheet } from "@/theme/StyleSheet";
import React from 'react';
import Box from "../Box";
import Icon from "../Icon";
import Text from "../Text";
import ProgressBar from "../ProgressBar";
import { skills } from "./skills";

interface SkillProps {
  name: keyof typeof skills;
  progress: number;
  styleSheet?: StyleSheet;
}

export default function Skill({ name, progress, styleSheet, ...props }: SkillProps) {
  const skill = skills[name];
    
  return (
    <Box 
      styleSheet={{ 
        height: "90px", 
        gap: "15px", 
        paddingVertical: "12px",  
        flexDirection: "row",
        width: { xs: "250px", md: "300px" } 
      }}>
      <Icon name={name} viewBox={[60, 69]} styleSheet={{ width: "auto", height: "auto" }}/>
      <Box styleSheet={{ gap: "5px" }}>
        <Text tag="h2" variant="heading2" colorVariant="neutral" colorVariantEnabled>{skill.name.toUpperCase()}</Text>
        <ProgressBar progress={progress} color={skill.color}/>
      </Box>
    </Box>
  );
}

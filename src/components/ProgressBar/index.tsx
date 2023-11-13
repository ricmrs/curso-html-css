import { StyleSheet } from "@/theme/StyleSheet";
import React from 'react';
import Box from "../Box";

interface ProgressBarProps {
  progress: number;
  color: string;
  styleSheet?: StyleSheet;
}

export default function ProgressBar({ progress, color, styleSheet, ...props }: ProgressBarProps) {
  const barWidth = 170;
  const barHeight = 25;

  return (
    <Box
      styleSheet={{
        width: `${barWidth}px`,
        height: `${barHeight}px`,
        border: "2.5px #000 solid",
        boxSizing: "content-box",
        backgroundColor: "#FFF"
      }}
    >
      <Box styleSheet={{ backgroundColor: color, width: `${progress / 100 * barWidth}px`, height: `${barHeight}px` }}/>
    </Box>
  );
}

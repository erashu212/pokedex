import * as React from "react";
import { Stack, Divider, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { LinearProgressWithLabel } from "./ProgressWithLabel";

type StatViewProps = {
  title: string;
  stat: number;
};

const StatItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const StatView: React.FC<StatViewProps> = ({ title, stat }) => {
  return (
    <Stack
      direction={"row"}
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
    >
      <StatItem>
        <Typography variant="subtitle1" gutterBottom>
          {title}
        </Typography>
        <LinearProgressWithLabel variant="determinate" value={stat} />
      </StatItem>
    </Stack>
  );
};

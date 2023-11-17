import * as React from "react";
import { Stack as MuiStack, Divider, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

type StatViewProps = {
  stackItems: ReadonlyArray<{ title: string; content: React.ReactElement }>;
};

const StackItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const StackView: React.FC<StatViewProps> = (props) => {
  return (
    <MuiStack
      direction={{ xs: "column", sm: "row" }}
      divider={
        <Divider flexItem />
      }
      spacing={{ xs: 1, sm: 2 }}
    >
      {props.stackItems?.map(({ title, content }, idx) => {
        return (
          <React.Fragment key={idx}>
            <StackItem elevation={0}>
              <Typography variant="subtitle1" gutterBottom>
                {title}
              </Typography>
            </StackItem>
            <StackItem elevation={0}>{content}</StackItem>
          </React.Fragment>
        );
      })}
    </MuiStack>
  );
};

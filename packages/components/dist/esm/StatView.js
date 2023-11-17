import * as React from "react";
import { Stack, Divider, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
const StackItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));
export const StackView = ({ title, content }) => {
    return (React.createElement(Stack, { direction: "row", divider: React.createElement(Divider, { orientation: "vertical", flexItem: true }), spacing: 2 },
        React.createElement(StackItem, null,
            React.createElement(Typography, { variant: "subtitle1", gutterBottom: true }, title),
            content)));
};
//# sourceMappingURL=StatView.js.map
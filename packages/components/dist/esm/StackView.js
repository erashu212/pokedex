import * as React from "react";
import { Stack as MuiStack, Divider, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
const StackItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));
export const StackView = (props) => {
    return (React.createElement(MuiStack, { direction: { xs: "column", sm: "row" }, divider: React.createElement(Divider, { flexItem: true }), spacing: { xs: 1, sm: 2 } }, props.stackItems?.map(({ title, content }, idx) => {
        return (React.createElement(React.Fragment, { key: idx },
            React.createElement(StackItem, { elevation: 0 },
                React.createElement(Typography, { variant: "subtitle1", gutterBottom: true }, title)),
            React.createElement(StackItem, { elevation: 0 }, content)));
    })));
};
//# sourceMappingURL=StackView.js.map
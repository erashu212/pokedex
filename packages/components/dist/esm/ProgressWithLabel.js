import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
export const LinearProgressWithLabel = (props) => {
    return (React.createElement(Box, { sx: { display: "flex", alignItems: "center" } },
        React.createElement(Box, { sx: { width: "100%", mr: 1 } },
            React.createElement(LinearProgress, { variant: "determinate", ...props })),
        React.createElement(Box, { sx: { minWidth: 35 } },
            React.createElement(Typography, { variant: "body2", color: "text.secondary" }, `${Math.round(props.value)}%`))));
};
//# sourceMappingURL=ProgressWithLabel.js.map
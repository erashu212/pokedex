import * as React from "react";
import { DataGrid as MuiDataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
const DataGrid = (props) => {
    return (React.createElement(Box, { sx: { width: "100%" } },
        React.createElement(MuiDataGrid, { ...props })));
};
export { DataGrid };
//# sourceMappingURL=DataGrid.js.map
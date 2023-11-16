import * as React from "react";
import {
  DataGrid as MuiDataGrid,
  GridSlotsComponentsProps,
  DataGridProps,
  GridColDef
} from "@mui/x-data-grid";
import { Box } from "@mui/material";

const DataGrid: React.FC<DataGridProps> = (props) => {
  return (
    <Box sx={{ width: "100%" }}>
      <MuiDataGrid {...props} />
    </Box>
  );
};
export { DataGrid, DataGridProps, GridColDef };

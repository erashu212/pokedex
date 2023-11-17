import * as React from "react";
import {
  DataGrid,
  Gravatar,
  GridColDef,
  DataGridProps,
} from "@pokedex/components";

export type ListViewProps = DataGridProps

export const ListView: React.FC<ListViewProps> = (props) => {
  return (
    <DataGrid
      {...props}
    />
  );
};

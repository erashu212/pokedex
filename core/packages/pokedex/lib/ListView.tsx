import * as React from "react";
import { DataGrid } from "@pokedex/components";

type ListViewProps = {
  items: ReadonlyArray<{ name: string; url: string }>;
  onItemSelection: (url: string) => void;
};

const columns = [{
    field: "name",
    headerName : "Name"
}];

export const ListView = () => {
  return <DataGrid columns={columns} />;
};

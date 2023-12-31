import type { Meta, StoryObj } from "@storybook/react";
import { ListView as BaseListView } from "@pokedex/pokedex";

const meta: Meta<typeof BaseListView> = {
  component: BaseListView,
};
export default meta;
type Story = StoryObj<typeof BaseListView>;

export const ListView: Story = {
  args: {
    columns: [{
      field: "name",
      headerName: "Name"
    }],
    rows: [
      {
        id: "1",
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/",
      },
      { id: "2", name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
      {
        id: "3",
        name: "venusaur",
        url: "https://pokeapi.co/api/v2/pokemon/3/",
      },
      {
        id: "4",
        name: "charmander",
        url: "https://pokeapi.co/api/v2/pokemon/4/",
      },
      {
        id: "5",
        name: "charmeleon",
        url: "https://pokeapi.co/api/v2/pokemon/5/",
      },
      {
        id: "6",
        name: "charizard",
        url: "https://pokeapi.co/api/v2/pokemon/6/",
      },
      {
        id: "7",
        name: "squirtle",
        url: "https://pokeapi.co/api/v2/pokemon/7/",
      },
      {
        id: "8",
        name: "wartortle",
        url: "https://pokeapi.co/api/v2/pokemon/8/",
      },
      {
        id: "9",
        name: "blastoise",
        url: "https://pokeapi.co/api/v2/pokemon/9/",
      },
      {
        id: "10",
        name: "caterpie",
        url: "https://pokeapi.co/api/v2/pokemon/10/",
      },
      {
        id: "11",
        name: "metapod",
        url: "https://pokeapi.co/api/v2/pokemon/11/",
      },
      {
        id: "12",
        name: "butterfree",
        url: "https://pokeapi.co/api/v2/pokemon/12/",
      },
      {
        id: "13",
        name: "weedle",
        url: "https://pokeapi.co/api/v2/pokemon/13/",
      },
      {
        id: "14",
        name: "kakuna",
        url: "https://pokeapi.co/api/v2/pokemon/14/",
      },
      {
        id: "15",
        name: "beedrill",
        url: "https://pokeapi.co/api/v2/pokemon/15/",
      },
      {
        id: "16",
        name: "pidgey",
        url: "https://pokeapi.co/api/v2/pokemon/16/",
      },
      {
        id: "17",
        name: "pidgeotto",
        url: "https://pokeapi.co/api/v2/pokemon/17/",
      },
      {
        id: "18",
        name: "pidgeot",
        url: "https://pokeapi.co/api/v2/pokemon/18/",
      },
      {
        id: "19",
        name: "rattata",
        url: "https://pokeapi.co/api/v2/pokemon/19/",
      },
      {
        id: "20",
        name: "raticate",
        url: "https://pokeapi.co/api/v2/pokemon/20/",
      },
    ],
    paginationMode: "server",
    pageSizeOptions: [5, 50, 100],
    rowCount: 1292,
    onRowClick: console.log,
  },
};

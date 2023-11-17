import type { Meta, StoryObj } from "@storybook/react";
import { DetailView, DetailViewProps } from "@pokedex/pokedex";

const meta: Meta<typeof DetailView> = {
  component: DetailView,
};
export default meta;
type Story = StoryObj<typeof DetailView>;

export const Details: Story = {
  args: {
    id: 1,
    name: "strench",
    baseExperience: 113,
    height: 6,
    weight: 75,
    order: 64,
    avatarImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    coverImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/35.svg",
    abilities: [
      {
        name: "cute-charm",
        url: "https://pokeapi.co/api/v2/ability/56/",
      },
      {
        name: "magic-guard",
        url: "https://pokeapi.co/api/v2/ability/98/",
      },
      {
        name: "friend-guard",
        url: "https://pokeapi.co/api/v2/ability/132/",
      },
    ],
    forms: [
      {
        name: "clefairy",
        url: "https://pokeapi.co/api/v2/pokemon-form/35/",
      },
    ],
    stats: [
      {
        baseStat: 70,
        effort: 2,
        name: "hp",
        url: "https://pokeapi.co/api/v2/stat/1/",
      },
      {
        baseStat: 45,
        effort: 0,
        name: "attack",
        url: "https://pokeapi.co/api/v2/stat/2/",
      },
    ],
    types: [],
  },
};

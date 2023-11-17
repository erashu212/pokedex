import * as React from "react";
import {
  Box,
  Grid,
  CardView,
  Typography,
  StackView,
  Tabs,
  Tab,
  TabView,
  TabType,
  Chip,
  ChipProps,
} from "components";

type BaseMetric = {
  name: string;
  url?: string;
};

type BaseDetails = {
  id: number;
  name: string;
  baseExperience: number;
  height: number;
  order: number;
  weight: number;
  avatarImage: string;
  coverImage: string;
};

type Ability = BaseMetric;
type Form = BaseMetric;
type Stat = BaseMetric & {
  baseStat: number;
  effort: number;
};
type Type = BaseMetric;

export type DetailViewProps = BaseDetails & {
  abilities: ReadonlyArray<Ability>;
  forms: ReadonlyArray<Form>;
  stats: ReadonlyArray<Stat>;
  types: ReadonlyArray<Type>;
};

const colors = ["primary", "success", "info", "secondary", "warning", "error"];

export const DetailView: React.FC<DetailViewProps> = (props) => {
  const [activeTab, setActiveTab] = React.useState(TabType.Ability);

  const getRandomColor = (): ChipProps["color"] => {
    return colors[
      Math.floor(Math.random() * colors.length)
    ] as unknown as ChipProps["color"];
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CardView
            imageUrl={props.coverImage}
            title={props.name}
            description={
              <>
                <StackView
                  stackItems={[
                    {
                      title: "Base Experience",
                      content: (
                        <Typography variant="subtitle2">
                          <Chip color={"info"} label={props.baseExperience} />
                        </Typography>
                      ),
                    },
                    {
                      title: "Weight",
                      content: (
                        <Typography variant="subtitle2">
                          <Chip color={"success"} label={props.weight} />
                        </Typography>
                      ),
                    },
                    {
                      title: "Height",
                      content: (
                        <Typography variant="subtitle2">
                          <Chip color={"warning"} label={props.height} />
                        </Typography>
                      ),
                    },
                    {
                      title: "Order",
                      content: (
                        <Typography variant="subtitle2">
                          <Chip color={"error"} label={props.order} />
                        </Typography>
                      ),
                    },
                  ]}
                />
              </>
            }
          />
        </Grid>
        <Grid item xs="auto">
          <TabView
            activeTab={activeTab}
            tabs={[
              {
                label: "Ability",
                value: TabType.Ability,
                content: props.abilities.map((ab) => (
                  <Chip
                    color={getRandomColor()}
                    label={ab.name}
                    sx={{ mr: 1 }}
                  />
                )),
              },
              {
                label: "Form",
                value: TabType.Form,
                content: props.forms.map((fm) => (
                  <Chip
                    color={getRandomColor()}
                    label={fm.name}
                    sx={{ mr: 1 }}
                  />
                )),
              },
              {
                label: "Stat",
                value: TabType.Stat,
                content: props.stats.map((st) => (
                  <Chip
                    variant="outlined"
                    color={getRandomColor()}
                    label={st.name + "-" + st.baseStat}
                    sx={{ mr: 1 }}
                  />
                )),
              },
            ]}
            onTabChange={setActiveTab}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

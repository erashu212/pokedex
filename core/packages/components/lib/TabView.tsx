import { Box, Grid, Paper, Tab, Tabs } from "@mui/material";
import * as React from "react";

export enum TabType {
  Ability = "Ability",
  Form = "Form",
  Stat = "Stat",
}

export type TabViewProps = {
  tabs: ReadonlyArray<{
    label: string;
    value: TabType;
    content: React.ReactNode;
  }>;
  activeTab: TabType;
  onTabChange: (value: TabType) => void;
};

export const TabView: React.FC<TabViewProps> = ({
  tabs,
  activeTab,
  onTabChange,
}) => {
  const getActiveTabContent = (tab: TabType) => {
    return tabs.find((t) => t.value === tab)?.content;
  };

  return (
    <Box>
      <Tabs
        value={activeTab}
        centered
        onChange={(e, value) => onTabChange(value)}
      >
        {tabs.map((tab) => {
          return <Tab label={tab.label} value={tab.value} key={tab.value} />;
        })}
      </Tabs>
      <Paper elevation={0} sx={{ my: 1, mx: 1 }}>
        {getActiveTabContent(activeTab)}
      </Paper>
    </Box>
  );
};

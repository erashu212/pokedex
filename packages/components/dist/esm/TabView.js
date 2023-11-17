import { Box, Paper, Tab, Tabs } from "@mui/material";
import * as React from "react";
export var TabType;
(function (TabType) {
    TabType["Ability"] = "Ability";
    TabType["Form"] = "Form";
    TabType["Stat"] = "Stat";
})(TabType || (TabType = {}));
export const TabView = ({ tabs, activeTab, onTabChange, }) => {
    const getActiveTabContent = (tab) => {
        return tabs.find((t) => t.value === tab)?.content;
    };
    return (React.createElement(Box, null,
        React.createElement(Tabs, { value: activeTab, centered: true, onChange: (e, value) => onTabChange(value) }, tabs.map((tab) => {
            return React.createElement(Tab, { label: tab.label, value: tab.value, key: tab.value });
        })),
        React.createElement(Paper, { elevation: 0, sx: { my: 1, mx: 1 } }, getActiveTabContent(activeTab))));
};
//# sourceMappingURL=TabView.js.map
import * as React from "react";
import { Box, Grid, CardView, Typography, StackView, TabView, TabType, Chip, } from "@pokedex/components";
const colors = ["primary", "success", "info", "secondary", "warning", "error"];
export const DetailView = (props) => {
    const [activeTab, setActiveTab] = React.useState(TabType.Ability);
    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    };
    return (React.createElement(Box, null,
        React.createElement(Grid, { container: true, spacing: 2 },
            React.createElement(Grid, { item: true, xs: 12 },
                React.createElement(CardView, { imageUrl: props.coverImage, title: props.name, description: React.createElement(React.Fragment, null,
                        React.createElement(StackView, { stackItems: [
                                {
                                    title: "Base Experience",
                                    content: (React.createElement(Typography, { variant: "subtitle2" },
                                        React.createElement(Chip, { color: "info", label: props.baseExperience }))),
                                },
                                {
                                    title: "Weight",
                                    content: (React.createElement(Typography, { variant: "subtitle2" },
                                        React.createElement(Chip, { color: "success", label: props.weight }))),
                                },
                                {
                                    title: "Height",
                                    content: (React.createElement(Typography, { variant: "subtitle2" },
                                        React.createElement(Chip, { color: "warning", label: props.height }))),
                                },
                                {
                                    title: "Order",
                                    content: (React.createElement(Typography, { variant: "subtitle2" },
                                        React.createElement(Chip, { color: "error", label: props.order }))),
                                },
                            ] })) })),
            React.createElement(Grid, { item: true, xs: "auto" },
                React.createElement(TabView, { activeTab: activeTab, tabs: [
                        {
                            label: "Ability",
                            value: TabType.Ability,
                            content: props.abilities.map((ab) => (React.createElement(Chip, { color: getRandomColor(), label: ab.name, sx: { mr: 1 } }))),
                        },
                        {
                            label: "Form",
                            value: TabType.Form,
                            content: props.forms.map((fm) => (React.createElement(Chip, { color: getRandomColor(), label: fm.name, sx: { mr: 1 } }))),
                        },
                        {
                            label: "Stat",
                            value: TabType.Stat,
                            content: props.stats.map((st) => (React.createElement(Chip, { variant: "outlined", color: getRandomColor(), label: st.name + "-" + st.baseStat, sx: { mr: 1 } }))),
                        },
                    ], onTabChange: setActiveTab })))));
};
//# sourceMappingURL=DetailView.js.map
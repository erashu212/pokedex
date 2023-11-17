"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailView = void 0;
const React = __importStar(require("react"));
const components_1 = require("@pokedex/components");
const colors = ["primary", "success", "info", "secondary", "warning", "error"];
const DetailView = (props) => {
    const [activeTab, setActiveTab] = React.useState(components_1.TabType.Ability);
    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    };
    return (React.createElement(components_1.Box, null,
        React.createElement(components_1.Grid, { container: true, spacing: 2 },
            React.createElement(components_1.Grid, { item: true, xs: 12 },
                React.createElement(components_1.CardView, { imageUrl: props.coverImage, title: props.name, description: React.createElement(React.Fragment, null,
                        React.createElement(components_1.StackView, { stackItems: [
                                {
                                    title: "Base Experience",
                                    content: (React.createElement(components_1.Typography, { variant: "subtitle2" },
                                        React.createElement(components_1.Chip, { color: "info", label: props.baseExperience }))),
                                },
                                {
                                    title: "Weight",
                                    content: (React.createElement(components_1.Typography, { variant: "subtitle2" },
                                        React.createElement(components_1.Chip, { color: "success", label: props.weight }))),
                                },
                                {
                                    title: "Height",
                                    content: (React.createElement(components_1.Typography, { variant: "subtitle2" },
                                        React.createElement(components_1.Chip, { color: "warning", label: props.height }))),
                                },
                                {
                                    title: "Order",
                                    content: (React.createElement(components_1.Typography, { variant: "subtitle2" },
                                        React.createElement(components_1.Chip, { color: "error", label: props.order }))),
                                },
                            ] })) })),
            React.createElement(components_1.Grid, { item: true, xs: "auto" },
                React.createElement(components_1.TabView, { activeTab: activeTab, tabs: [
                        {
                            label: "Ability",
                            value: components_1.TabType.Ability,
                            content: props.abilities.map((ab) => (React.createElement(components_1.Chip, { color: getRandomColor(), label: ab.name, sx: { mr: 1 } }))),
                        },
                        {
                            label: "Form",
                            value: components_1.TabType.Form,
                            content: props.forms.map((fm) => (React.createElement(components_1.Chip, { color: getRandomColor(), label: fm.name, sx: { mr: 1 } }))),
                        },
                        {
                            label: "Stat",
                            value: components_1.TabType.Stat,
                            content: props.stats.map((st) => (React.createElement(components_1.Chip, { variant: "outlined", color: getRandomColor(), label: st.name + "-" + st.baseStat, sx: { mr: 1 } }))),
                        },
                    ], onTabChange: setActiveTab })))));
};
exports.DetailView = DetailView;
//# sourceMappingURL=DetailView.js.map
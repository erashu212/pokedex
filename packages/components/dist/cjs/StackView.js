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
exports.StackView = void 0;
const React = __importStar(require("react"));
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const StackItem = (0, styles_1.styled)(material_1.Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));
const StackView = (props) => {
    return (React.createElement(material_1.Stack, { direction: { xs: "column", sm: "row" }, divider: React.createElement(material_1.Divider, { flexItem: true }), spacing: { xs: 1, sm: 2 } }, props.stackItems?.map(({ title, content }, idx) => {
        return (React.createElement(React.Fragment, { key: idx },
            React.createElement(StackItem, { elevation: 0 },
                React.createElement(material_1.Typography, { variant: "subtitle1", gutterBottom: true }, title)),
            React.createElement(StackItem, { elevation: 0 }, content)));
    })));
};
exports.StackView = StackView;
//# sourceMappingURL=StackView.js.map
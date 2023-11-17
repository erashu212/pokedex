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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinearProgressWithLabel = void 0;
const React = __importStar(require("react"));
const LinearProgress_1 = __importDefault(require("@mui/material/LinearProgress"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const LinearProgressWithLabel = (props) => {
    return (React.createElement(Box_1.default, { sx: { display: "flex", alignItems: "center" } },
        React.createElement(Box_1.default, { sx: { width: "100%", mr: 1 } },
            React.createElement(LinearProgress_1.default, { variant: "determinate", ...props })),
        React.createElement(Box_1.default, { sx: { minWidth: 35 } },
            React.createElement(Typography_1.default, { variant: "body2", color: "text.secondary" }, `${Math.round(props.value)}%`))));
};
exports.LinearProgressWithLabel = LinearProgressWithLabel;
//# sourceMappingURL=ProgressWithLabel.js.map
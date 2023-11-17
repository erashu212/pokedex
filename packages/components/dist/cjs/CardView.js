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
exports.CardView = void 0;
const React = __importStar(require("react"));
const Card_1 = __importDefault(require("@mui/material/Card"));
const CardContent_1 = __importDefault(require("@mui/material/CardContent"));
const CardActionArea_1 = __importDefault(require("@mui/material/CardActionArea"));
const CardMedia_1 = __importDefault(require("@mui/material/CardMedia"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const CardView = ({ imageUrl, title, description, onClick, }) => {
    return (React.createElement(Card_1.default, { elevation: 3 },
        React.createElement(CardActionArea_1.default, { onClick: onClick },
            React.createElement(CardMedia_1.default, { sx: { objectFit: "contain" }, component: "img", alt: title, height: 150, image: imageUrl }),
            React.createElement(CardContent_1.default, null,
                React.createElement(Typography_1.default, { align: "center", gutterBottom: true, variant: "h3", component: "p" }, title),
                description))));
};
exports.CardView = CardView;
//# sourceMappingURL=CardView.js.map
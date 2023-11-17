import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
export const CardView = ({ imageUrl, title, description, onClick, }) => {
    return (React.createElement(Card, { elevation: 3 },
        React.createElement(CardActionArea, { onClick: onClick },
            React.createElement(CardMedia, { sx: { objectFit: "contain" }, component: "img", alt: title, height: 150, image: imageUrl }),
            React.createElement(CardContent, null,
                React.createElement(Typography, { gutterBottom: true, variant: "h5", component: "p" }, title),
                description))));
};
//# sourceMappingURL=CardView.js.map
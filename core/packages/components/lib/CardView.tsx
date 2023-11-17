import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

type CardViewProps = {
  imageUrl: string;
  title: string;
  description?: React.ReactNode;
  onClick?: () => void;
};

export const CardView: React.FC<CardViewProps> = ({
  imageUrl,
  title,
  description,
  onClick,
}) => {
  return (
    <Card elevation={3}>
      <CardActionArea onClick={onClick}>
        <CardMedia
          sx={{ objectFit: "contain" }}
          component="img"
          alt={title}
          height={150}
          image={imageUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="p">
            {title}
          </Typography>
          {description}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

import * as React from "react";
import { Avatar as MuiAvatar, AvatarProps } from "@mui/material";

export const Gravatar: React.FC<AvatarProps> = (props) => {
  return <MuiAvatar {...props} />;
};

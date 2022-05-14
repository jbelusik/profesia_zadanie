import { Typography } from "@mui/material";

interface ITitleProps {
  text: string;
}

export const Title: React.FC<ITitleProps> = ({ text }) => {
  return (
    <Typography variant="h3" paddingY={"0.3em"} fontWeight={"600"}>
      {text}
    </Typography>
  );
};

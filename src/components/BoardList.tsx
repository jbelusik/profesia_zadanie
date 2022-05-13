import { Button, Typography } from "@mui/material";
import FlexView from "react-flexview/lib";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export const BoardList: React.FC = () => {
  return (
    <FlexView
      column
      style={{ backgroundColor: "white", margin: "0.5em", padding: "0.5em" }}
    >
      <Typography variant="h4" paddingY={"0.3em"} fontWeight={"600"}>
        Meno boardu
      </Typography>
      <ListButton />
      <ListButton />
      <ListButton />
      <ListPlusButton />
    </FlexView>
  );
};

export const ListButton: React.FC = () => {
  return (
    <Button
      variant="contained"
      style={{
        padding: "0.5em",
        color: "black",
        fontWeight: "600",
        backgroundColor: "rgb(0, 209,178)",
        width: "300px",
        minWidth: "300px",
        margin: "5px",
      }}
    >
      Urobiť zadanie
    </Button>
  );
};

const ListPlusButton: React.FC = () => {
  return (
    <Button
      variant="outlined"
      style={{
        padding: "0.5em",
        color: "rgb(0, 209,178)",
        fontWeight: "600",
        backgroundColor: "white",
        width: "300px",
        margin: "5px",
      }}
      startIcon={<AddCircleIcon />}
    />
  );
};

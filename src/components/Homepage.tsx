import { Button, Stack, Typography } from "@mui/material";
import FlexView from "react-flexview/lib";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export const Homepage: React.FC = () => {
  return (
    <FlexView column>
      <Typography variant="h3" paddingY={"0.3em"} fontWeight={"600"}>
        Homepage
      </Typography>
      <Stack direction={"row"} spacing={2}>
        <FlexView wrap>
          <BoardButton />

          <BoardButton />

          <BoardButton />

          <BoardButton />

          <PlusButton />
        </FlexView>
      </Stack>
    </FlexView>
  );
};

const BoardButton: React.FC = () => {
  return (
    <Button
      variant="contained"
      style={{
        padding: "1em",
        color: "black",
        fontWeight: "600",
        backgroundColor: "rgb(0, 209,178)",
        width: "300px",
        minWidth: "300px",
        margin: "5px",
      }}
    >
      Prvý board
    </Button>
  );
};

const PlusButton: React.FC = () => {
  return (
    <Button
      variant="outlined"
      style={{
        padding: "1em",
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

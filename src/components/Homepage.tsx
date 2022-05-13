import { Button, Stack, Typography } from "@mui/material";
import FlexView from "react-flexview/lib";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Boards } from "../store/store";
import { observer } from "mobx-react";

interface IHomepageProps {
  store: Boards;
}

export const Homepage: React.FC<IHomepageProps> = observer(({ store }) => {
  store.load();

  return (
    <FlexView column>
      <Typography variant="h3" paddingY={"0.3em"} fontWeight={"600"}>
        Homepage
      </Typography>
      <Stack direction={"row"} spacing={2}>
        <FlexView wrap>
          {store.boards.map((board) => {
            return <BoardButton name={board.name} />;
          })}

          <PlusButton />
        </FlexView>
      </Stack>
    </FlexView>
  );
});

interface IBoardsButton {
  name: string;
}

export const BoardButton: React.FC<IBoardsButton> = ({ name }) => {
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
      {name}
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

import { Stack } from "@mui/material";
import { observer } from "mobx-react";
import FlexView from "react-flexview/lib";
import { useNavigate } from "react-router-dom";
import { AddField } from "../../components/AddField";
import { BoardsModel } from "../store";
import { Title } from "../../components/Title";

interface IHomepageProps {
  store: BoardsModel;
}

export const Homepage: React.FC<IHomepageProps> = observer(({ store }) => {
  store.load();

  return (
    <FlexView column>
      <Title text={"Homepage"} />
      <Stack direction={"row"} spacing={2}>
        <FlexView wrap>
          {store.boards.map((board) => {
            return <BoardPreview name={board.name} id={board.id} />;
          })}
          <AddField
            onBlur={(name) => {
              store.addBoard(name);
            }}
          />
        </FlexView>
      </Stack>
    </FlexView>
  );
});

interface IBoardsButton {
  name: string;
  id: string;
}

export const BoardPreview: React.FC<IBoardsButton> = ({ name, id }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        fontWeight: "700",
        backgroundColor: "rgb(0, 209,178)",
        width: "18em",
        height: "1.5em",
        margin: "0.3em",
        padding: "1em",
        borderRadius: "10px",
      }}
      onClick={() => {
        navigate(`/boards/${id}`);
      }}
    >
      {name}
    </div>
  );
};

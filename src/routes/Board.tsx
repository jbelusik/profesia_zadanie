import { Stack } from "@mui/material";
import FlexView from "react-flexview/lib";
import { useParams } from "react-router-dom";
import { BoardsModel } from "../store/store";
import { AddField } from "../components/AddField";
import { BoardList } from "../components/BoardList";
import { Title } from "../components/Title";
import { observer } from "mobx-react";

interface IHomepageProps {
  store: BoardsModel;
}

export const Board: React.FC<IHomepageProps> = observer(({ store }) => {
  store.load();
  const boardId = useParams().boardId;

  const boardModel = store.boards.find((board) => board.id === boardId);

  return (
    <FlexView column>
      <Title text={boardModel ? boardModel.name : ""} />

      <FlexView wrap>
        <Stack direction={"row"} spacing={2}>
          {boardModel?.lists.map((listModel) => (
            <BoardList listModel={listModel} boardId={boardModel.id} />
          ))}
        </Stack>
        <AddField
          onBlur={(name) => {
            boardModel?.addList(name);
          }}
        />
      </FlexView>
    </FlexView>
  );
});

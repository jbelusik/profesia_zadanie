import { Stack, Typography } from "@mui/material";
import FlexView from "react-flexview/lib";
import { useParams } from "react-router-dom";
import { Boards } from "../store/store";
import { BoardList } from "./BoardList";

interface IHomepageProps {
  store: Boards;
}

export const Board: React.FC<IHomepageProps> = ({ store }) => {
  store.load();
  const boardId = useParams().boardId;

  const boardModel = store.boards.find((board) => board.id === boardId);

  return (
    <FlexView column>
      <Typography variant="h3" paddingY={"0.3em"} fontWeight={"600"}>
        {boardModel?.name}
      </Typography>
      <Stack direction={"row"} spacing={2}>
        <FlexView wrap>
          {boardModel?.lists.map((list) => (
            <BoardList name={list.name} items={list.items} />
          ))}
        </FlexView>
      </Stack>
    </FlexView>
  );
};

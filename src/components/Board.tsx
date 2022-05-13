import { Stack, Typography } from "@mui/material";
import FlexView from "react-flexview/lib";
import { Boards } from "../store/store";
import { BoardList } from "./BoardList";

interface IHomepageProps {
  store: Boards;
}

export const Board: React.FC<IHomepageProps> = ({ store }) => {
  store.load();
  return (
    <FlexView column>
      <Typography variant="h3" paddingY={"0.3em"} fontWeight={"600"}>
        Meno boardu
      </Typography>
      <Stack direction={"row"} spacing={2}>
        <FlexView wrap>
          <BoardList />

          <BoardList />

          <BoardList />

          <BoardList />
          <BoardList />
        </FlexView>
      </Stack>
    </FlexView>
  );
};

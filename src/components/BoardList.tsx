import { Typography } from "@mui/material";
import { observer } from "mobx-react";
import FlexView from "react-flexview/lib";
import { ListModel } from "../store/store";
import { AddField } from "./AddField";

interface IBoardList {
  listModel: ListModel;
  boardId: string;
}

export const BoardList: React.FC<IBoardList> = observer(
  ({ listModel, boardId }) => {
    return (
      <FlexView
        column
        style={{
          backgroundColor: "white",
          margin: "0.5em",
          padding: "0.5em",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h4" paddingY={"0.3em"} fontWeight={"600"}>
          {listModel.name}
        </Typography>
        {listModel.items.map((item) => (
          <ListItem name={item.name} />
        ))}
        <AddField
          onBlur={(name) => {
            listModel.addItem(boardId, name);
          }}
        />
      </FlexView>
    );
  }
);

interface IListItem {
  name: string;
}

export const ListItem: React.FC<IListItem> = ({ name }) => {
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
    >
      {name}
    </div>
  );
};

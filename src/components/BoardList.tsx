import { Button, Typography } from "@mui/material";
import FlexView from "react-flexview/lib";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Item } from "../store/store";

interface IBoardList {
  name: string;
  items: Item[];
}

export const BoardList: React.FC<IBoardList> = ({ name, items }) => {
  return (
    <FlexView
      column
      style={{ backgroundColor: "white", margin: "0.5em", padding: "0.5em" }}
    >
      <Typography variant="h4" paddingY={"0.3em"} fontWeight={"600"}>
        {name}
      </Typography>
      {items.map((item) => (
        <ListItem name={item.name} />
      ))}

      <ListPlusButton />
    </FlexView>
  );
};

interface IListItem {
  name: string;
}

export const ListItem: React.FC<IListItem> = ({ name }) => {
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
      {name}
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

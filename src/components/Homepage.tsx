import { Stack, TextField, Typography } from "@mui/material";
import { observer } from "mobx-react";
import { useState } from "react";
import FlexView from "react-flexview/lib";
import { Boards } from "../store/store";

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
            return <BoardPreview name={board.name} />;
          })}

          <PlusButton store={store} />
        </FlexView>
      </Stack>
    </FlexView>
  );
});

interface IBoardsButton {
  name: string;
}

export const BoardPreview: React.FC<IBoardsButton> = ({ name }) => {
  return (
    <TextField
      variant="outlined"
      style={{
        // padding: "1em",
        // color: "red",
        fontWeight: "600",
        backgroundColor: "rgb(0, 209,178)",
        width: "300px",
        minWidth: "300px",
        margin: "5px",
        pointerEvents: "none",
      }}
      value={name}
    />
  );
};

interface IPlusButtonProps {
  store: Boards;
}

const PlusButton: React.FC<IPlusButtonProps> = observer(({ store }) => {
  const [name, setName] = useState("...");

  return (
    <>
      <TextField
        variant="outlined"
        inputProps={{
          form: {
            autocomplete: "off",
          },
        }}
        style={{
          // padding: "1em",
          color: "rgb(0, 209,178)",
          fontWeight: "600",
          backgroundColor: "white",
          width: "300px",
          margin: "5px",
        }}
        value={name}
        onChange={(value) => {
          setName(value.target.value);
        }}
        onFocus={() => {
          if (name === "...") {
            setName("");
          }
        }}
        onBlur={() => {
          if (name === "") {
            setName("...");
            return;
          }

          store.save(name);
        }}
      />
    </>
  );
});

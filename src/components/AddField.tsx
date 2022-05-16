import { useState } from "react";
import { TextField } from "@mui/material";
import { observer } from "mobx-react";

interface IAddFieldProps {
  onBlur: (value: string) => void;
}

export const AddField: React.FC<IAddFieldProps> = observer(({ onBlur }) => {
  const [name, setName] = useState("...");

  return (
    <>
      <TextField
        variant="outlined"
        autoComplete={"off"}
        style={{
          color: "rgb(0, 209,178)",
          fontWeight: "600",
          backgroundColor: "white",
          height: "3.5em",
          width: "20em",
          margin: "0.4em",
          borderRadius: "10px",
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

          onBlur(name);
          setName("...");
        }}
      />
    </>
  );
});

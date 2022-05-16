import { useState } from "react";
import FlexView from "react-flexview/lib";
import { observer } from "mobx-react";

import { Header } from "./components/Header";
import { Homepage } from "./routes/Homepage";

import { createStore } from "./store/store";
import { Route, Routes } from "react-router-dom";
import { Board } from "./routes/Board";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const App: React.FC = observer(() => {
  const [store] = useState(() => createStore());
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(0, 209,178)",
      },
    },
  });

  return (
    <div>
      <Header />
      <FlexView
        style={{
          marginLeft: "10em",
          marginRight: "10em",
        }}
      >
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Homepage store={store} />} />
            <Route path="/boards/:boardId" element={<Board store={store} />} />
          </Routes>
        </ThemeProvider>
      </FlexView>
    </div>
  );
});

export default App;

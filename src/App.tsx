import { useState } from "react";
import FlexView from "react-flexview/lib";
import { observer } from "mobx-react";

import { Header } from "./components/Header";
import { Homepage } from "./routes/Homepage";
import { createStore } from "./store/store";
import { Route, Routes } from "react-router-dom";
import { Board } from "./routes/Board";
import { createTheme, ThemeProvider } from "@mui/material/styles";

/*
  Vec ktorú by som určite ešte zmenil je štýlovanie. Minimálne 
  by som vyňal štýly do osobytných css súborov a v komponentoch 
  použil className aby bol kód čitatelnejší. Ešte ideálnejšie by 
  bolo použiť less, keďže napr. farba pre buttony by sa dala dať
  do konštanty a potom si ju už iba importovať v jednotlivých less 
  súboroch. 
  Poprípade by som ešte vyskúšal Tailwind css, ale neviem či by to
  nespôsobovalo problémy so štýlovaním material ui knižnice.
*/

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

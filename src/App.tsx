import { useState } from "react";
import FlexView from "react-flexview/lib";
import { observer } from "mobx-react";

import { Header } from "./components/Header";
import { Homepage } from "./components/Homepage";

import { createStore } from "./store/store";
import { Route, Routes } from "react-router-dom";
import { Board } from "./components/Board";

export const App: React.FC = observer(() => {
  const [store] = useState(() => createStore());

  return (
    <div>
      <Header />
      <FlexView
        style={{
          marginLeft: "10em",
          marginRight: "10em",
        }}
      >
        <Routes>
          <Route path="/" element={<Homepage store={store} />} />
          <Route path="/boards/:boardId" element={<Board store={store} />} />
        </Routes>
      </FlexView>
    </div>
  );
});

export default App;

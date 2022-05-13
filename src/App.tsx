import { useState } from "react";
import FlexView from "react-flexview/lib";
import { Board } from "./components/Board";
import { Header } from "./components/Header";

import { createStore } from "./store/store";

export const App: React.FC = () => {
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
        <Board store={store} />
      </FlexView>
    </div>
  );
};

export default App;

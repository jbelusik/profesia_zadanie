import { useState } from "react";
import FlexView from "react-flexview/lib";
import { observer } from "mobx-react";

import { Header } from "./components/Header";
import { Homepage } from "./components/Homepage";

import { createStore } from "./store/store";

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
        <Homepage store={store} />
      </FlexView>
    </div>
  );
});

export default App;

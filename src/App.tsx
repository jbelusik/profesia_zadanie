import FlexView from "react-flexview/lib";
import { Header } from "./components/Header";
import { Homepage } from "./components/Homepage";

function App() {
  return (
    <div>
      <Header />
      <FlexView
        style={{
          marginLeft: "10em",
          marginRight: "10em",
        }}
      >
        <Homepage />
      </FlexView>
    </div>
  );
}

export default App;

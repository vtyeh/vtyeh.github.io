import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={Home} />
        {/* <div id={"main"}>venessa yeh</div> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

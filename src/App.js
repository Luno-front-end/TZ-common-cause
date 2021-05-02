import { Route } from "react-router-dom";
import HomeView from "./Components/views/HomeView";
import Policy from "./Components/views/PolicyView";
import Agreement from "./Components/views/AgreementView";
// import Test from "./Components/Test";

function App() {
  return (
    <>
      <Route exact path="/">
        <HomeView />
      </Route>

      <Route path="/policy">
        <Policy />
      </Route>
      <Route path="/agreement">
        <Agreement />
      </Route>
    </>
  );
}

export default App;

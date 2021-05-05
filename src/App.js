import { Route } from "react-router-dom";
import HomeView from "./Components/views/HomeView";
import Policy from "./Components/views/PolicyView";
import Agreement from "./Components/views/AgreementView";
import InfoTable from "./Components/InfoTable/InfoTable";
// import Test from "./Components/Test";

function App() {
  return (
    <>
      <Route exact path="/">
        <HomeView />
        <InfoTable />
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

import { useState } from "react";
import { Route } from "react-router-dom";
import HomeView from "./Components/views/HomeView";
import Policy from "./Components/views/PolicyView";
import Agreement from "./Components/views/AgreementView";
import InfoTable from "./Components/InfoTable/InfoTable";
import RegisterInfoView from "./Components/views/RegistrInfoView";
import InfoView from "./Components/views/InfoView";
// import Test from "./Components/Test";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const checkOpenModal = (isOpen) => {
    setModalOpen(isOpen);
  };
  return (
    <>
      <Route exact path="/">
        <HomeView checkOpenModal={checkOpenModal} modalOpen={modalOpen} />
        <InfoTable />
      </Route>
      <Route path="/registration">
        <RegisterInfoView
          checkOpenModal={checkOpenModal}
          modalOpen={modalOpen}
        />
        <InfoTable />
      </Route>
      <Route path="/thanks">
        <InfoView />
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

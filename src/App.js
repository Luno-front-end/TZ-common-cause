import { useState, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Loader from "./Components/Loader";
import FormRegInfo from "./Components/RegisterComponents/FormRegInfo";
import InfoTable from "./Components/InfoTable";

const HomeView = lazy(() => import("./Components/views/HomeView"));
const RegisterInfoView = lazy(() =>
  import("./Components/views/RegistrInfoView")
);
const InfoView = lazy(() => import("./Components/views/InfoView"));
const Policy = lazy(() => import("./Components/views/PolicyView"));
const Agreement = lazy(() => import("./Components/views/AgreementView"));
const NotFound = lazy(() => import("./Components/NotFound"));

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const checkOpenModal = (isOpen) => {
    setModalOpen(isOpen);
    return modalOpen;
  };

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/">
            <HomeView
              checkOpenModal={checkOpenModal}
              stateModalOpen={modalOpen}
            />
            <InfoTable />
          </Route>
          <Route path="/registration">
            <RegisterInfoView
              checkOpenModal={checkOpenModal}
              stateModalOpen={modalOpen}
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
          <Route path="/test">
            <FormRegInfo />
          </Route>
          <NotFound />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;

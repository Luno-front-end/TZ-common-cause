import { useState, lazy, Suspense } from "react";
import { Route } from "react-router-dom";

import Loader from "./Components/Loader";
import FormRegInfo from "./Components/RegisterComponents/FormRegInfo";
// import Agreement from "./Components/views/AgreementView";
import InfoTable from "./Components/InfoTable/InfoTable";

const HomeView = lazy(() => import("./Components/views/HomeView"));
const RegisterInfoView = lazy(() =>
  import("./Components/views/RegistrInfoView")
);
const InfoView = lazy(() => import("./Components/views/InfoView"));
const Policy = lazy(() => import("./Components/views/PolicyView"));
const Agreement = lazy(() => import("./Components/views/AgreementView"));

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const checkOpenModal = (isOpen) => {
    setModalOpen(isOpen);
  };

  return (
    <>
      <Suspense fallback={<Loader />}>
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
        <Route path="/test">
          <FormRegInfo />
        </Route>
      </Suspense>
    </>
  );
}

export default App;

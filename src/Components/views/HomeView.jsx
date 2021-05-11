import { useHistory } from "react-router";
import { useEffect } from "react";

import Container from "../Container/Container";
import Logo from "../Logo";
import Hiro from "../HomeComponents/Hiro";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Form from "../Form";
import Company from "../Company/Company";
import Footer from "../Footer";

import Modal from "../Modal";

export default function HomeViews({ checkOpenModal, stateModalOpen }) {
  document.body.classList.remove("body-styles");
  document.body.classList.remove("body-styles-thinks");
  const history = useHistory();

  useEffect(() => {
    historyTransitions();
    // console.log(checkOpenModal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const historyTransitions = () => {
    const { state } = history.location;
    const location = (state && state.referrer) || "/";

    history.push(location);
  };

  return (
    <div>
      <header>
        <Container>
          <Logo classContainerLogo="logo-container" />
          <Hiro />
        </Container>
      </header>
      <main>
        <Container>
          <VideoPlayer
            classContainer="player-container"
            linkVideo="https://files.devio.top:9443/promoVideo.mp4"
          />
          <Form
            page="/registration"
            btnText="Пройти БЕСПЛАТНУЮ регистрацию!"
            stateModalOpen={stateModalOpen}
          />
          <Company />
        </Container>
      </main>

      <footer className="footer-container">
        <Container>
          <Footer />
        </Container>
      </footer>
      <Modal
        checkOpenModal={checkOpenModal}
        page="/registration"
        headerText="Начните получать от 2500 у.е. в месяц!"
      />
    </div>
  );
}

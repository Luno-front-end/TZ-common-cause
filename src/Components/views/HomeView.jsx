import Container from "../Container/Container";

import Logo from "../Logo/Logo";
import Hiro from "../HomeComponents/Hiro";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Form from "../Form/Form";
import Company from "../Company";
import Footer from "../Footer/Footer";
import ModalHome from "../HomeComponents/ModalHome";

export default function HomeViews() {
  //   container.onmouseover = container.onmouseout = handler;

  // function handler(event) {

  //   function str(el) {

  //     if (!el) return "null"
  //     return el.className || el.tagName;
  //   }

  return (
    <div>
      <header>
        <Container>
          <Logo classContainerLogo="logo-container" />
          <Hiro />
        </Container>
        <ModalHome />
      </header>
      <main>
        <Container>
          <VideoPlayer
            classContainer="player-container"
            linkVideo="https://files.devio.top:9443/promoVideo.mp4"
          />
          <Form page="/registration" btnText="Пройти БЕСПЛАТНУЮ регистрацию!" />
          <Company />
        </Container>
      </main>

      <footer className="footer-container">
        <Container>
          <Footer />
        </Container>
      </footer>
    </div>
  );
}

import { useEffect } from "react";
import Container from "../Container/Container";

import Logo from "../Logo/Logo";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import FormBig from "../RegisterInfo/FormBig";
import Company from "../Company";

export default function RegisterInfoView() {
  return (
    <div className="container-registration">
      <header>
        <Container>
          <Logo classContainerLogo="logo-container-reg" />
        </Container>
      </header>
      <main>
        <Container>
          <VideoPlayer
            classContainer="player-container-reg"
            linkVideo="https://files.devio.top:9443/promo2.mp4"
          />
          <FormBig
            classArrow="arrow-reg"
            newClassContainerForInput={"small-container"}
          />
          <Company />
        </Container>
      </main>

      {/* <footer className="footer-container">
        <Container>
          <Footer />
        </Container>
      </footer> */}
    </div>
  );
}

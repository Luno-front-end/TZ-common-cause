import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Container from "../Container/Container";

import Logo from "../Logo/Logo";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Form from "../Form/Form";
import BodySteps from "../RegisterComponents/BodySteps";
import Modal from "../Modal";
import Company from "../Company/Company";
import Reviews from "../RegisterComponents/Reviews";
import HowWork from "../RegisterComponents/HowWork";
import HelpSupport from "../RegisterComponents/HelpSupport";
import SectionFormInfo from "../RegisterComponents/SectionFormInfo";
import MiniCompanyReg from "../Company/MiniCompanyReg";
import Footer from "../Footer/Footer";

export default function RegisterInfoView({ modalOpen, checkOpenModal }) {
  document.body.classList.remove("body-styles-thinks");
  document.body.classList.add("body-styles");

  const { pathname } = useLocation();

  // useEffect(() => {}, []);
  // className = "container-registration";
  return (
    <>
      <header>
        <div className="reg-body">
          <Container>
            <Logo classContainerLogo="logo-container-reg" />
            <VideoPlayer
              classContainer="player-container-reg"
              linkVideo="https://files.devio.top:9443/promo2.mp4"
            />
            <Form
              classArrow="arrow-reg"
              btnText="Хочу доступ к «Общему делу»"
              page="/thanks"
              checkOpenModal={modalOpen}
            />
            <Company />
          </Container>
        </div>
        <BodySteps />
      </header>
      <main>
        <Container>
          <Reviews />
        </Container>
        <HowWork />
        <Container>
          <HelpSupport />
        </Container>
        <SectionFormInfo page="/thanks" />
        <Container>
          <section className="section-company-reg">
            <MiniCompanyReg />
          </section>
        </Container>
      </main>

      <footer
        className={
          pathname === "/registration"
            ? "footer-container-reg"
            : "footer-container"
        }
      >
        <Container>
          <Footer />
        </Container>
      </footer>
      <Modal
        checkOpenModal={checkOpenModal}
        headerText="Сегодня вам выпал счастливый шанс. Не упустите его!"
      />
    </>
  );
}

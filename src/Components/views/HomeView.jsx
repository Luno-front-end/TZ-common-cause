import Container from "../Container/Container";

import Logo from "../Logo/Logo";
import Hiro from "../HomeComponents/Hiro/Hiro";
import Main from "../HomeComponents/Main/Main";
import FormMini from "../HomeComponents/FormMini/FormMini";
import Company from "../HomeComponents/Company/Company";
import Footer from "../Footer/Footer";

export default function HomeViews() {
  return (
    <div>
      <header>
        <Container>
          <Logo />
          <Hiro />
        </Container>
      </header>
      <main>
        <Container>
          <Main />
          <FormMini />
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

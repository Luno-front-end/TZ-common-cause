import { Link } from "react-router-dom";

import logo from "../../images/main-logo.png";

export default function Logo({ classContainerLogo }) {
  return (
    <div className={classContainerLogo}>
      <Link to="/" className="logo-link">
        <img className="logo" src={logo} alt="Общее дело" />
      </Link>
    </div>
  );
}

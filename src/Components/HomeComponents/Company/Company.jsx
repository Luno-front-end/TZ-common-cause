import companyOne from "../../../images/company/company-one.png";
import companyTwo from "../../../images/company/company-two.png";
import companyThree from "../../../images/company/company-three.png";
import companyFour from "../../../images/company/company-four.png";
import companyFive from "../../../images/company/company-five.png";

export default function Company() {
  return (
    <ul className="company-container">
      <li className="company-item">
        <img src={companyOne} alt="companyOne" />
      </li>
      <li className="company-item">
        <img src={companyTwo} alt="companyTwo" />
      </li>
      <li className="company-item">
        <img src={companyThree} alt="companyThree" />
      </li>
      <li className="company-item">
        <img src={companyFour} alt="companyFour" />
      </li>
      <li className="company-item">
        <img src={companyFive} alt="companyFive" />
      </li>
    </ul>
  );
}

import miniCompanyOne from "../../images/company/mini-company-one.png";
import miniCompanyTwo from "../../images/company/mini-company-two.png";
import miniCompanyThree from "../../images/company/mini-company-three.png";
import miniCompanyFour from "../../images/company/mini-company-four.png";
import miniCompanyFive from "../../images/company/mini-company-five.png";

export default function MiniCompanyReg() {
  return (
    <ul className="company-container">
      <li className="company-item">
        <img src={miniCompanyOne} alt="companyOne" />
      </li>
      <li className="company-item">
        <img src={miniCompanyTwo} alt="companyTwo" />
      </li>
      <li className="company-item">
        <img src={miniCompanyThree} alt="companyThree" />
      </li>
      <li className="company-item">
        <img src={miniCompanyFour} alt="companyFour" />
      </li>
      <li className="company-item">
        <img src={miniCompanyFive} alt="companyFive" />
      </li>
    </ul>
  );
}

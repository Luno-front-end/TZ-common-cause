import miniCompanyOne from "../../images/company/mini-company-one.png";
import miniCompanyTwo from "../../images/company/mini-company-two.png";
import miniCompanyThree from "../../images/company/mini-company-three.png";
import miniCompanyFour from "../../images/company/mini-company-four.png";
import miniCompanyFive from "../../images/company/mini-company-five.png";

export default function MiniCompany() {
  return (
    <ul className="mini-company-container">
      <li className="mini-company-item">
        <img src={miniCompanyOne} alt="companyOne" width="125" height="25" />
      </li>
      <li className="mini-company-item">
        <img src={miniCompanyTwo} alt="companyTwo" width="51" height="25" />
      </li>
      <li className="mini-company-item">
        <img src={miniCompanyThree} alt="companyThree" width="57" height="25" />
      </li>
      <li className="mini-company-item">
        <img src={miniCompanyFour} alt="companyFour" width="98" height="25" />
      </li>
      <li className="mini-company-item">
        <img src={miniCompanyFive} alt="companyFive" width="25" height="25" />
      </li>
    </ul>
  );
}

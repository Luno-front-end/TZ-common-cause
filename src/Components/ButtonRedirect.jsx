import { Link } from "react-router-dom";

export default function ButtonRedirect({
  addClassBtn,
  onClick,
  redirect,
  children,
  valueNameBtn,
  valueEmailBtn,
  valueNumber,
  lastNameValue,
}) {
  // const checkPage = () => {
  //   if (!redirect) {
  //     return;
  //   }
  //   return redirect;
  // };
  return (
    <Link
      type="submit"
      className={addClassBtn ? addClassBtn : "btn-form-home"}
      onClick={onClick}
      to={{
        pathname: `${redirect}`,
        name: valueNameBtn,
        email: valueEmailBtn,
        number: valueNumber,
        lastName: lastNameValue,
      }}
    >
      {children}
    </Link>
  );
}

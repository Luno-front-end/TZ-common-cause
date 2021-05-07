import { Link } from "react-router-dom";

export default function ButtonRedirect({
  addClassBtn,
  onClick,
  redirect,
  children,
}) {
  return (
    <Link
      type="submit"
      className={addClassBtn ? addClassBtn : "btn-form-home"}
      onClick={onClick}
      to={redirect}
    >
      {children}
    </Link>
  );
}

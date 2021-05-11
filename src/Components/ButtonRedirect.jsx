export default function ButtonRedirect({
  addClassBtn,

  children,
}) {
  return (
    <button
      type="submit"
      className={addClassBtn ? addClassBtn : "btn-form-home"}
    >
      {children}
    </button>
  );
}

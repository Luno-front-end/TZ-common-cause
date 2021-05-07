export default function ModalHome({ children, onClose }) {
  return (
    <div className="wrapper" onClick={onClose}>
      <div className=" modal-home ">{children}</div>
    </div>
  );
}

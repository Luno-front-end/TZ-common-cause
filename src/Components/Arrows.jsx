export default function Arrows({ children, classArrow }) {
  return (
    <div className={classArrow ? classArrow : "arrows-container"}>
      {children}
    </div>
  );
}

import useInfoTableHook from "../hooks/useInfoTableHook";

export default function InfoTable() {
  const state = useInfoTableHook();
  // {
  //   placesNum, watchingNum;
  // }

  // console.log(isOnline);
  return (
    <div className="container-info-table">
      <div className="container-watching">
        <div className="container-quantity-table-watching">
          <p className="quantity-table-watching">{state.watchingNum}</p>
        </div>
        <div>
          <p className="first-text-table-watching">СМОТРЯТ</p>
          <p className="second-text-table-watching">страницу</p>
        </div>
      </div>
      <div className="container-places">
        <div>
          <p className="first-text-table-places">Осталось</p>
          <p className="second-text-table-places">МЕСТ</p>
        </div>
        <div className="container-quantity-table-places">
          <p className="quantity-table-places">{state.placesNum}</p>
        </div>
      </div>
    </div>
  );
}

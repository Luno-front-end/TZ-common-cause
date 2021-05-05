import { useState, useEffect } from "react";

export default function InfoTable() {
  const [placesNum, setPlacesNum] = useState(
    Math.round(Math.random() * (34 - 61) + 34)
  );
  const [idIntP, setidIntP] = useState(null);
  const [watchingNum, setWatchingNum] = useState(
    Math.round(Math.random() * (102 - 131) + 131)
  );
  const [idIntW, setidIntW] = useState(null);

  useEffect(() => {
    if (watchingNum > 246) {
      clearInterval(idIntW);
      setidIntW(
        setInterval(() => {
          setWatchingNum(
            (prevState) => prevState - Math.round(Math.random()) - 1 || 2 || 3
          );
        }, 8000)
      );
    } else if (watchingNum < 129) {
      reusableInetrvWatching();
    }
  }, [watchingNum]);

  useEffect(() => {
    if (placesNum > 8) {
      clearInterval(idIntP);
      setidIntP(
        setInterval(() => {
          setPlacesNum(
            (prevState) => prevState - Math.round(Math.random()) - 1 || 2
          );
        }, 9000)
      );
    } else if (placesNum < 4) {
      clearInterval(idIntP);
      setidIntP(
        setInterval(() => {
          setPlacesNum(
            (prevState) => prevState + Math.round(Math.random()) + 1 || 2
          );
        }, 6000)
      );
    }
  }, [placesNum]);

  const reusableInetrvWatching = () => {
    clearInterval(idIntW);
    setidIntW(
      setInterval(() => {
        setWatchingNum(
          (prevState) => prevState + Math.round(Math.random()) + 1 || 2 || 3
        );
      }, 8000)
    );
  };

  return (
    <div className="container-info-table">
      <div className="container-watching">
        <div className="container-quantity-table-watching">
          <p className="quantity-table-watching">{watchingNum}</p>
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
          <p className="quantity-table-places">{placesNum}</p>
        </div>
      </div>
    </div>
  );
}

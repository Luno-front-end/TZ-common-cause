import { useState, useEffect } from "react";

export default function useInfoTableHook() {
  const [placesNum, setPlacesNum] = useState(
    Math.round(Math.random() * (34 - 61) + 34)
  );
  const [idIntP, setidIntP] = useState(null);
  const [watchingNum, setWatchingNum] = useState(
    Math.round(Math.random() * (102 - 131) + 131)
  );
  const [idIntW, setidIntW] = useState(null);

  useEffect(() => {
    clearInterval(idIntW);
    clearInterval(idIntP);
  }, []);

  // useEffect(() => {
  //   fakePipleW();
  //   fakePipleP();
  // }, []);
  // watchingNum;
  //  useEffect(() => {}, [placesNum]);

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

  //   const state = {
  //     placesNum,
  //     watchingNum,
  //     idIntP,
  //     idIntW,
  //   };

  return { placesNum, watchingNum, idIntP, idIntW };
}
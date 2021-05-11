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
    return () => clearComponent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const clearComponent = () => {
    setPlacesNum("");
    setidIntP(null);
    setWatchingNum("");
    setidIntW(null);
  };

  return { placesNum, watchingNum, idIntP, idIntW };
}

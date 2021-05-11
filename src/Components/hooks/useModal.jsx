import { useState, useEffect } from "react";

export default function useSendForm(checkOpenModal) {
  const [modalOpen, setModalOpen] = useState(false);
  const bodyEl = document.querySelector("body");

  useEffect(() => {
    add();
    return () => onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const add = () => {
    bodyEl.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("keydown", escClose);
  };

  const escClose = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
    window.removeEventListener("keydown", escClose);
  };

  function onMouseLeave(e) {
    if (e.target.tagName === "BODY") {
      bodyEl.classList.add("overHiden");
      checkOpenModal(true);
      setModalOpen(true);
    }
  }

  const onClose = () => {
    bodyEl.removeEventListener("mouseleave", onMouseLeave);
    bodyEl.classList.remove("overHiden");
    checkOpenModal(false);
    setModalOpen(false);
  };

  const hendleClickBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return { modalOpen, hendleClickBackdrop, onClose };
}

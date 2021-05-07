import { useState } from "react";
import { FaVolumeUp } from "react-icons/fa";
import classnames from "classnames";

export default function VideoPlayer({ classContainer, linkVideo }) {
  const [mutedValues, setMutedValues] = useState(true);
  const [hideBtn, setРideBtn] = useState(false);

  function mutedVolume() {
    setMutedValues(false);
    setРideBtn(true);
  }

  return (
    <div className={classContainer}>
      <video
        className="player"
        autoPlay
        muted={mutedValues}
        controls
        width="620"
        height="370"
      >
        <source src={linkVideo} type="video/mp4" />
      </video>
      <button
        onClick={mutedVolume}
        className={classnames("btn-video-volume", { hideBtn })}
        type="button"
      >
        <FaVolumeUp className="volume-icon" />
        Включить звук
      </button>
    </div>
  );
}

import promoVideo from "../../../images/video/promoVideo.mp4";

export default function Main() {
  return (
    <div className="player-container">
      <video
        className="player"
        autoPlay
        muted
        controls
        width="620"
        height="370"
      >
        <source src={promoVideo} type="video/mp4" />
      </video>
    </div>
  );
}

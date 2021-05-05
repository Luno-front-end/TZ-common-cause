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
        <source
          src="https://files.devio.top:9443/promoVideo.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

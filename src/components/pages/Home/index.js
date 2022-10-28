import React from "react";

function Home() {
  return (
    <>
      <div className="video-bg">
        <video autoplay muted loop id="myVideo">
          <source src="videos/home.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
    </>
  );
}

export default Home;

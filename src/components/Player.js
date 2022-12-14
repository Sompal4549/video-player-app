import React, { useRef, useState } from "react";
// import ReactPlayer from "react-player";
import { Player } from "video-react";
// import VideoPlayer from "react-video-js-player";
const PPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);
  const sliderRef = useRef(null);
  const togglePlay = (event) => {
    event.preventDefault();
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const handleProgress = () => {
    const duration = videoRef.current.duration;
    const currentTime = videoRef.current.currentTime;
    const progress = (currentTime / duration) * 100;
    setProgress(progress);
  };
  const handleChange = (event) => {
    event.preventDefault();
    videoRef.current.duration = sliderRef.current.value;
  };
  return (
    <div>
      <video
        onTimeUpdate={handleProgress}
        ref={videoRef}
        width="100%"
        height="100%"
        poster="https://images.pexels.com/photos/14689308/pexels-photo-14689308.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        controls
      >
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        ></source>
      </video>
      <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
      <progress value={progress} max="100"></progress>
      <input type="range" value={progress} onChange={handleChange} />

    
    </div>
  );
};

export default PPlayer;

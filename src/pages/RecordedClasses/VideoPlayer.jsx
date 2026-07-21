import { useEffect, useRef, useState } from "react";
import {
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
  FaVolumeUp,
  FaVolumeMute,
  FaExpand,
} from "react-icons/fa";

export default function VideoPlayer({
  src,
  progress = 0,
  onProgressUpdate,
}) {
  const videoRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const resume = () => {
      if (progress > 0) {
        video.currentTime = (progress / 100) * video.duration;
      }
    };

    video.addEventListener("loadedmetadata", resume);

    return () => {
      video.removeEventListener("loadedmetadata", resume);
    };
  }, [progress]);

  const togglePlay = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const updateTime = () => {
    const video = videoRef.current;

    if (!video) return;

    setCurrentTime(video.currentTime);
    setDuration(video.duration);

    if (onProgressUpdate) {
      onProgressUpdate(
        Math.floor((video.currentTime / video.duration) * 100)
      );
    }
  };

  const skipForward = () => {
    videoRef.current.currentTime += 10;
  };

  const skipBackward = () => {
    videoRef.current.currentTime -= 10;
  };

  const changeVolume = (e) => {
    const value = Number(e.target.value);

    setVolume(value);

    videoRef.current.volume = value;
  };

  const changeSpeed = (e) => {
    const value = Number(e.target.value);

    setSpeed(value);

    videoRef.current.playbackRate = value;
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
  };

  const fullscreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const format = (time) => {
    if (!time) return "00:00";

    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);

    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-black rounded-3xl overflow-hidden shadow-lg">

      <video
        ref={videoRef}
        src={src}
        className="w-full"
        onTimeUpdate={updateTime}
      />

      <div className="bg-white p-4 space-y-4">

        <div className="flex justify-between text-sm">

          <span>{format(currentTime)}</span>

          <span>{format(duration)}</span>

        </div>

        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={(e) => {
            videoRef.current.currentTime = e.target.value;
            setCurrentTime(e.target.value);
          }}
          className="w-full"
        />

        <div className="flex flex-wrap gap-3 justify-center">

          <button
            onClick={skipBackward}
            className="p-3 rounded-full bg-gray-100"
          >
            <FaBackward />
          </button>

          <button
            onClick={togglePlay}
            className="p-4 rounded-full bg-blue-600 text-white"
          >
            {playing ? <FaPause /> : <FaPlay />}
          </button>

          <button
            onClick={skipForward}
            className="p-3 rounded-full bg-gray-100"
          >
            <FaForward />
          </button>

          <button
            onClick={toggleMute}
            className="p-3 rounded-full bg-gray-100"
          >
            {volume === 0 ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>

          <button
            onClick={fullscreen}
            className="p-3 rounded-full bg-gray-100"
          >
            <FaExpand />
          </button>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div>

            <label className="text-sm font-medium">
              Volume
            </label>

            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={changeVolume}
              className="w-full"
            />

          </div>

          <div>

            <label className="text-sm font-medium">
              Playback Speed
            </label>

            <select
              value={speed}
              onChange={changeSpeed}
              className="w-full border rounded-xl p-2"
            >
              <option value={0.5}>0.5x</option>
              <option value={0.75}>0.75x</option>
              <option value={1}>1x</option>
              <option value={1.25}>1.25x</option>
              <option value={1.5}>1.5x</option>
              <option value={1.75}>1.75x</option>
              <option value={2}>2x</option>
            </select>

          </div>

        </div>

      </div>

    </div>
  );
}
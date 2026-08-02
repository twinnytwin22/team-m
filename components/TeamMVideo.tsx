"use client";

import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

const videoUrl = "https://pub-040a593b1a854c5dab5924d0e952ec8c.r2.dev/team-m-2k.mp4";

function formatTime(time: number) {
  if (!Number.isFinite(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

export default function TeamMVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.muted = true;
      setIsMuted(true);
      await video.play();
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const seek = (value: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = value;
    setCurrentTime(value);
  };

  return (
    <div className="group relative aspect-video md:aspect-4/3 w-full self-start overflow-hidden bg-[#151812] xl:aspect-video">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        poster="/FIR00656.jpg"
        preload="none"
        playsInline
        muted
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

     {!isPlaying &&  <button
        type="button"
        onClick={togglePlayback}
        className="absolute inset-0 flex items-center justify-center focus:outline-none focus-visible:ring-4 focus-visible:ring-teamm-gold"
        aria-label={isPlaying ? "Pause Team M film" : "Play Team M film"}
      >
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-teamm-gold text-[#151812] shadow-xl transition-transform duration-200 group-hover:scale-110">
          <Play className="ml-1 h-8 w-8 fill-current" />
        </span>
      </button>}

      <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-5 text-white sm:p-6">
        <button
          type="button"
          onClick={togglePlayback}
          className="rounded-full p-2 transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-teamm-gold"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="h-5 w-5 fill-current" /> : <Play className="h-5 w-5 fill-current" />}
        </button>
        <span className="min-w-20 text-xs font-semibold tabular-nums text-white/85">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
        <input
          aria-label="Video progress"
          className="h-1 w-full cursor-pointer accent-[#f7941d]"
          type="range"
          min="0"
          max={duration || 0}
          step="0.1"
          value={currentTime}
          onChange={(event) => seek(Number(event.target.value))}
        />
        <button
          type="button"
          onClick={toggleMute}
          className="rounded-full p-2 transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-teamm-gold"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </button>
      </div>
    </div>
  );
}

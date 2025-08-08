import { useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

export default function AudioPlayer({ src, title }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full max-w-md bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-xl shadow-lg p-4 flex items-center gap-4">
      <button
        onClick={togglePlayback}
        className="w-10 h-10 flex items-center justify-center bg-pink-600 hover:bg-pink-700 rounded-full text-white transition"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
      <div className="flex-1">
        <p className="text-white font-medium truncate">{title}</p>
        <audio ref={audioRef} src={src} preload="metadata" />
      </div>
    </div>
  );
}
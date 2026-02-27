import { useState } from "react";
import { Play } from "lucide-react";

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
}

export default function YouTubeFacade({ videoId, title }: YouTubeFacadeProps) {
  const [loaded, setLoaded] = useState(false);

  // Use YouTube's thumbnail API — mqdefault is 320x180, good enough for facade
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

  if (loaded) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
        loading="lazy"
      />
    );
  }

  return (
    <button
      onClick={() => setLoaded(true)}
      className="relative w-full h-full group cursor-pointer bg-bg-card"
      aria-label={`Play video: ${title}`}
    >
      <img
        src={thumbnailUrl}
        alt={title}
        loading="lazy"
        decoding="async"
        width={320}
        height={180}
        className="w-full h-full object-cover"
      />
      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
        <div className="w-16 h-16 rounded-full bg-accent-teal/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <Play size={28} className="text-bg-primary ml-1" fill="currentColor" />
        </div>
      </div>
      {/* Click to play label */}
      <span className="absolute bottom-3 left-3 text-xs font-mono text-white/70 bg-black/50 px-2 py-1 rounded">
        Click to play
      </span>
    </button>
  );
}

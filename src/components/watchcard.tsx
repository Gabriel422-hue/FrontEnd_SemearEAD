import React from "react";

export default function WatchCard({ videoTitle, videoThumbnailUrl }) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img className="w-full" src={videoThumbnailUrl} alt={videoTitle} />
      <div className="px-10 py-4">
        <div className="font-bold text-xl mb-2">{videoTitle}</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
          mauris vel nisl aliquet ultrices.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-red-500 hover:bg-black text-white font-bold py-2 px-4 rounded-full">
          Continuar assistindo
        </button>
      </div>
    </div>
  );
}



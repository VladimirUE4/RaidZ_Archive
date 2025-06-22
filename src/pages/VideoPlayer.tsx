import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

const VideoPlayer: React.FC<{ videoId: string }> = ({ videoId }) => {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player(playerRef.current, {
        height: '360',
        width: '640',
        videoId,
      });
    };
  }, [videoId]);

  return <div ref={playerRef} />;
};

export default VideoPlayer;
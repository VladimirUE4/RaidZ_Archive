import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Wrapper from "@/components/wrapper";

const API_KEY = 'AIzaSyCaARB6fyw3wbPKmvdvHwjyLzKeWabK_WM';
const CHANNEL_ID = 'UCPHTlBp2l1tv5yiIAlftE0A';

const Videos: React.FC = () => {
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=20`
      )
      .then((response) => {
        setVideos(response.data.items);
      })
      .catch((error) => {
        console.error('Error fetching videos:', error);
      });
  }, []);

  return (
    <Wrapper>
    <div className="container mx-auto px-4 py-8">
      {videos.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Notre dernière vidéo</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={`https://www.youtube.com/embed/${videos[0].id.videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={videos[0].snippet.title}
            />
          </div>
        </div>
      )}
      {videos.length > 1 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Nos autres vidéos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.slice(1).map((video) => (
              <div key={video.id.videoId} className="aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={video.snippet.title}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    </Wrapper>
  );
};

export default Videos;

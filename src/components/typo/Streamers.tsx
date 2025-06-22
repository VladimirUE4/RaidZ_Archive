import React, { useEffect, useState } from 'react';

interface Streamer {
  user_name: string;
  viewer_count: number;
  title: string;
  user_login: string;
  thumbnail_url: string;
  tags: string[];
}

const Streamers: React.FC = () => {
  const [streamers, setStreamers] = useState<Streamer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const clientId = 'uwe7cn49zl980kvhjnojsxf5ae8a0c';
  const clientSecret = '8rfi0jtgl23ykcejvcfd7e34zbjfqc';

  useEffect(() => {
    const fetchStreamers = async () => {
      const url = `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`;
      const response = await fetch(url, { method: 'POST' });
      const data = await response.json();
      const bearer = data.access_token;

      const streamsUrl = `https://api.twitch.tv/helix/streams?game_id=493959&language=fr`;
      const streamsResponse = await fetch(streamsUrl, {
        headers: {
          Authorization: `Bearer ${bearer}`,
          'Client-Id': clientId,
        },
      });
      const streamsData = await streamsResponse.json();
      
      console.log(streamsData.data)
      if (streamsData.data.length === 0) {
        setLoading(false);
      } else {
        const filteredStreamers = streamsData.data.filter((streamer: Streamer) =>
          streamer.title.toUpperCase().includes('RAIDZ') ||
          streamer.title.toUpperCase().includes('[RAIDZ]') ||
          streamer.title.toUpperCase().includes('[RAID Z]')
        );
        setStreamers(filteredStreamers);
        setLoading(false);
      }
    };

    fetchStreamers();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center mb-5">

    <div className="relative items-center block max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white opacity-20">Prépare toi à regarder du super contenu</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 opacity-20">Et n'hésite pas à nous rejoindre</p>
        <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
            <span className="sr-only">Chargement des Streamers.</span>
        </div>
    </div>
    </div>;
  }

  if (streamers.length === 0) {
    return <div className="flex items-center justify-center mb-5">Personne ne streame pour le moment</div>
    ;
  }

  return (
    <div className="container px-6 py-10 mx-auto animate-pulse">
      <h1 className="w-48 h-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
  
      <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
      <p className="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg sm:w-80 dark:bg-gray-700"></p>
  
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
        {streamers.map((streamer, index) => (
          <div key={index} className="w-full">
            <a href={`https://twitch.tv/${streamer.user_name}`}>
              <div
                className="w-full h-64 bg-center bg-cover rounded-lg dark:bg-gray-600"
                style={{
                  backgroundImage: `url(https://static-cdn.jtvnw.net/previews-ttv/live_user_${streamer.user_name}-440x248.jpg)`,
                }}
              ></div>
            </a>
            <h1 className="w-56 h-2 mt-4 rounded-lg dark:bg-gray-700">{streamer.title}</h1>
            <p className="w-24 h-2 mt-4 mb-4 rounded-lg dark:bg-gray-700">{streamer.user_name}</p>
            <a
              className="w-24 h-2 mt-6 rounded-lg dark:bg-gray-700"
              href={`https://twitch.tv/${streamer.user_name}`}
              target="_blank"
            >
              Regarder
            </a>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default Streamers;

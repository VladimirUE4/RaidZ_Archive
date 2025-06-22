import React, { useState} from 'react';
import Wrapper from "@/components/wrapper";
import H1 from "@/components/typo/H1";
import H2 from "@/components/typo/H2";
import H4 from "@/components/typo/H4";
import Streamers from "@/components/typo/Streamers";
import Footer from "@/components/typo/Footer";
import { BentoGridDemo } from '@/components/typo/allarticles';

const Auth: React.FC = () => {
  const [imageClass, setImageClass] = useState<string>('bg-custom-blackwater');


  const handleButtonClick = (imageClass: string) => {
    setImageClass(imageClass);
  };


  return  (
    <div className="min-h-screen bg-custom-image bg-cover bg-no-repeat bg-center">
      <Wrapper className="flex flex-col items-center justify-center mb-16">
        <H2 className="text-red-600 mb-1 tracking-normal">Welcome to </H2>
        <H1 className="mb-1 text-gray-300 tracking-normal">RaidZ</H1>
        <H1 className="text-red-600 mb-2 tracking-normal">Apocalypse</H1>

        <button type="button" className="mt-10 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
          <a id="login" href="https://discord.com/oauth2/authorize?client_id=1247219621543546891&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2FAuth%2FDiscord&scope=identify">
            <span>Join Us </span>
          </a>
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </button>
        
      </Wrapper>


    <Wrapper className="-skew-y-3">
    <div className="grid grid-cols-3 gap-4 h-3/4 mx-12 transform -rotate-20">
    <div className="flex flex-col space-y-8">
  <button className=" font-custombutton text-5xl bg-custom-button bg-cover bg-center text-white font-bold py-2 px-4 rounded h-full transform rotate-20 hover:bg-red-700 hover:scale-105 active:bg-red-900" onClick={() => handleButtonClick('bg-custom-saintdenis')}>Saint Denis</button>
  <button className="font-custombutton text-5xl bg-custom-button bg-cover bg-center text-white font-bold py-2 px-4 rounded h-full transform rotate-20 hover:bg-red-700 hover:scale-105 active:bg-red-900" onClick={() => handleButtonClick('bg-custom-valentine')}>Valentine</button>
  <button className="font-custombutton text-5xl bg-custom-button bg-cover bg-center text-white font-bold py-2 px-4 rounded h-full transform rotate-20 hover:bg-red-700 hover:scale-105 active:bg-red-900" onClick={() => handleButtonClick('bg-custom-blackwater')}>Blackwater</button>
</div>

      <div className="col-span-2">
        <div className={`h-full w-full bg-cover bg-no-repeat bg-center ${imageClass}`}></div>
      </div>
    </div>
      
    </Wrapper>

      <H4 className="flex items-center justify-center mt-9 mb-9">NOS DIVERS ARTICLES</H4>
      <BentoGridDemo/>

      <div className='mt-5'>
      <H4 className="flex items-center justify-center mt-9 mb-9">NOS SUPERS STREAMERS</H4>
      <Streamers />
      </div>


      <Footer></Footer>
    </div>
  );
};

export default Auth;

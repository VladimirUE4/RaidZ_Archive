

"use client";
import { LayoutGrid } from "@/components/typo/layout-grid";

export function Team() {
  return (
    <div className="h-screen py-20 w-full bg-custom-image3 bg-cover bg-no-repeat bg-center ">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Freeman</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Le créateur
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Umut Bozok</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Le fils de Zidane
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Johnny</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        L'homme d'affaire
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Browny</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        L'homme de l'ombre
      </p>
    </div>
  );
};
const SkeletonEight = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Alarm</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Le Mexicanos
        </p>
      </div>
    );
  };

const SkeletonFive = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">dlaV</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Le saltimbanque
        </p>
      </div>
    );
  };

  const SkeletonSix = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Wars</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Le punisseur
        </p>
      </div>
    );
  };
  const SkeletonSeven = () => {
    return (
      <div>
        <p className="font-bold text-4xl text-white">Kero</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Le Panda 
        </p>
      </div>
    );
  };

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-1",
    thumbnail:
      "https://cdn.discordapp.com/avatars/260490137824133120/025a4795ff59c2441781519e9056719b?size=1024",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://cdn.discordapp.com/avatars/446627248431431680/fac190c8c76a9df927dce1ba418a7c8e?size=1024",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://cdn.discordapp.com/avatars/700654486191865916/11a8473d8dc0f6a1d2e140e7be74b6f5?size=1024",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-1",
    thumbnail:
      "https://cdn.discordapp.com/avatars/372428363605999616/b0a218ff6dc73653db8312831f57ed75?size=1024",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-1",
    thumbnail:
      "https://cdn.discordapp.com/avatars/821682089351053312/42ad7d634c721285a1e7831ae69c4fa9?size=1024",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "md:col-span-1",
    thumbnail:
      "https://cdn.discordapp.com/avatars/232138254084866048/a_5c6c12d981aeeced22af27bb991ffb4f?size=1024",
  },
  {
    id: 7,
    content: <SkeletonSeven />,
    className: "md:col-span-1",
    thumbnail:
      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzdwNGJ5amJ2dDVldWhvN2gyYmFjM24zM2ltbDJnbGw3azEzODJ4MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pOeuPPvO3Lbxu/giphy.gif",
  },
  {
    id: 8,
    content: <SkeletonEight/>,
    className: "md:col-span-1",
    thumbnail:
      "https://cdn.discordapp.com/avatars/380873908372373525/fc09a14485def2c045f7bcad3e97226e?size=1024",
  },
];


export default Team;

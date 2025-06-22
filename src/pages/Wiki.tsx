import Wrapper from "@/components/wrapper";
import H1 from "@/components/typo/H1";
import H2 from "@/components/typo/H2";
import H4 from "@/components/typo/H4";
import Footer from "@/components/typo/Footer"
import { Link } from "react-router-dom";
import { useState } from 'react';
import { Minimize } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import Map from "@/components/typo/Map"



const items = [
  { id: 1, title: 'Comment avoir la meilleure monture', subtitle: 'Les chevaux', description: 'Description blabla' },
  { id: 2, title: 'Card 2', subtitle: 'Subtitle 2', description: 'Description 2' },
];

interface CapturedZone {
  bounds: [[number, number], [number, number]];
  captured: boolean;
  imageUrl: string;
  tooltipContent: string;

}


const imageUrl = './dbv2/assets/RedZmapN.png';
const imageBounds: [[number, number], [number, number]] = [[-1, -1], [1, 1]];
const capturedZones: CapturedZone[] = [
  { bounds: [[-0.28, -0.26], [0.32, 0.59]], captured: true, imageUrl: './dbv2/assets/zoneverte.png' , tooltipContent: 'This is the tooltip content for captured zone 1'  },
    // { bounds: [[0, 0], [0.5, 0.5]], captured: true, imageUrl: 'url-de-votre-image-2.png' },
];



const Wiki = () => {


  const [selectedId, setSelectedId] = useState<number | null>(null);
  return (

    
<div className="min-h-screen bg-custom-imagewiki bg-cover bg-no-repeat bg-center relative">

    <Wrapper className="flex flex-col items-center justify-center mb-16">
        <H2 className="text-red-600 mb-1 tracking-normal">Welcome to </H2>
        <H1 className="mb-1 text-gray-300 mb-6 tracking-normal">RaidZ</H1>
        <H1 className="text-red-600 mb-2 tracking-normal">Wiki</H1>

        
    </Wrapper>
    <div className="min-h-screen bg-custom-poker bg-cover bg-no-repeat bg-center relative">
    {/* <form className="max-w-md mx-auto">   
    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Recherche dans notre Wiki..." required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
    </form> */}

    <Wrapper>

        <div>
        {/* <div className="flex flex-row items-center justify-center">
        <H2 className="mb-1 tracking-normal">Questions</H2>
        <H2 className="text-red-600 mb-2 tracking-normal">Fréquentes</H2>
        </div>
        
<div id="accordion-collapse" className="mx-auto w-3/5 mb-8" data-accordion="collapse">
  <h2 id="accordion-collapse-heading-1">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
      <span>Bien débuter sur RaidZ</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
    <div className="max-w-lg mx-auto">
  <h2 className="text-2xl font-bold mb-4">Bienvenue à votre aventure !</h2>
  <p className="mb-4">
    Vous commencez avec 10,25 $ en poche, ce qui vous permet d'acheter une monture bon marché comme un âne ou un cheval Alezan Belge, et de la nourriture pour deux jours. Avec les 2,25 $ restants, vous pouvez acheter une gourde et de la nourriture pour deux jours. Mais attention à la date de péremption de la nourriture ! Votre faim diminue de 100 % à 0 % en 2 heures, tandis que votre soif se tarit entièrement en 1h30. N'hésitez pas à remplir votre gourde dans les points d'eau potable répartis sur la carte.
  </p>
  <p className="mb-4">
    Si vous préférez économiser vos dollars, vous pouvez chasser et cuisiner vous-même votre viande. Cependant, cette méthode est moins efficace. Variez votre alimentation pour rester en forme !
  </p>
  <p className="mb-4">
    Une fois votre argent dépensé, vous êtes fauché, mais pas désespéré ! Il existe une multitude de métiers libres pour gagner vos premiers dollars. Environ une heure de travail dans des domaines comme la poste, les usines de charbon, de pétrole ou les champs de tabac vous rapportera environ 2,50 $ si vous effectuez chaque travaux.
  </p>
  <p className="mb-4">
    Dès votre arrivée en jeu, choisissez la destinée de votre personnage et lancez-vous dans cette aventure excitante !
  </p>
  <p className="text-gray-500 dark:text-gray-400">
    Rejoignez-nous <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">sur Discord</a> et soyez le meilleur !
  </p>
</div>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-2">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
      <span>Mettre les touches de son jeu en français</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
<div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
  <h2 className="text-xl font-bold mb-2">Tutoriel pour avoir un clavier en français de façon permanente</h2>
  <ol className="list-decimal list-inside text-gray-500 dark:text-gray-400">
    <li className="mb-2">Téléchargez le fichier     <a href="/src/files/default.meta" download className="text-blue-600 dark:text-blue-500 hover:underline"> default.meta </a></li>
    <li className="mb-2">Appuyez sur Windows + R et copiez le chemin d'accès ci-dessous dans la fenêtre qui s'ouvre :
      <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded mt-2">%localappdata%/RedM/RedM.app/citizen/platform/data/control</pre>
    </li>
    <li className="mb-2"><p>Collez le fichier
    <a href="/src/files/default.meta" download className="text-blue-600 dark:text-blue-500 hover:underline"> default.meta </a> 
    
    téléchargé dans le dossier Rejoignez-nous 
    
    que vous avez ouvert</p></li>
    <li className="mb-2">Redémarrez votre jeu pour que les modifications prennent effet</li>
  </ol>
  <p className="text-gray-500 dark:text-gray-400">Maintenant, vous n'aurez plus à basculer votre clavier en QWERTY pour avoir les touches en français de façon permanente.</p>
</div>

  </div>
  <h2 id="accordion-collapse-heading-3">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>Pk c'est mieux que LGW ?</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
    <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
      <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
      <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
      <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
        <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
      </ul>
    </div>
  </div>
</div> */}



        <Wrapper>
          <div>
            <div className="flex flex-row items-center justify-center">
              <H2 className="mb-1 tracking-normal">Questions</H2>
              <H2 className="text-red-600 mb-2 tracking-normal">Fréquentes</H2>
            </div>

            <section>
              <div className="container px-6 py-10  ">
              <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3">
  {items.map((item) => (
    <motion.div
      key={item.id}
      layoutId={item.id.toString()}
      className="max-w-md bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 cursor-pointer relative overflow-hidden"
      onClick={() => setSelectedId(item.id)}
    >
      <div className="absolute inset-0 bg-custom-image3 bg-cover bg-no-repeat bg-center rounded-t-lg"></div>
      <div className="relative z-10 p-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-white">{item.subtitle}</h5>
        <p className="mb-3 text-sm font-normal text-white">{item.description}</p>
        <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
          Read more
          <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </motion.div>
  ))}
</div>

              </div>
            </section>

            <AnimatePresence>
              {selectedId && (
                <motion.div
                  layoutId={selectedId.toString()}
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div className="w-3/4 h-3/4 bg-custom-image3 bg-cover bg-no-repeat bg-center rounded-lg p-5">
                    <div className="flex flex-row w-full  justify-between">
                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{items.find((item) => item.id === selectedId)?.title}</h2>
                    
                    <button
                      className="text-white bg-black px-4 py-2 rounded-lg"
                      onClick={() => setSelectedId(null)}
                    >
                      <Minimize/>
                    </button>

                    </div>
                    <p className="mb-4 ">{items.find((item) => item.id === selectedId)?.description}</p>
                    
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Wrapper>
   
        <H4></H4>
        {/* <H4 className="mt-2 text-muted-foreground">
          Checkout <InlineCode>@/components/ui/protected-route.tsx</InlineCode> to
          add protected contents logic. 
        </H4> */}

</div>
   


    <section >

    <div className="container px-6 py-10 mx-auto ">
    <h2 className="text-4xl font-extrabold dark:text-white   text-center">CATEGORIES</h2>

          
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3">
          
        <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 grid grid-rows-6">
        <a href="/wiki/wikilore" className="row-span-4 bg-custom-image3 bg-cover bg-no-repeat bg-center rounded-t-lg"></a>
        <div className="p-5 row-span-2">
          <a href="/wiki/wikilore">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Le Lore de RaidZ </h5>
          </a>
          <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">Tout savoir sur le Lore de RaidZ </p>
          <Link to="/wiki/wikilore" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Read more
      <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </Link>
        </div>
      </div>


<div className="max-w-md bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 grid grid-rows-6">
  <a href="/wiki/wikicommunautes" className="row-span-4 bg-custom-image3 bg-cover bg-no-repeat bg-center rounded-t-lg"></a>
  <div className="p-5 row-span-2">
    <a href="/wiki/wikicommunautes">
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Les communautés</h5>
    </a>
    <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">Tout savoir sur les communautés de RaidZ</p>
    <Link to="/wiki/wikicommunautes" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Read more
      <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </Link>
  </div>
</div>


<div className="max-w-md bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 grid grid-rows-6">
  <a href="#" className="row-span-4 bg-custom-image3 bg-cover bg-no-repeat bg-center rounded-t-lg"></a>
  <div className="p-5 row-span-2">
    <a href="#">
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Notre Wiki</h5>
    </a>
    <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">Toutes les réponses à tes questions se trouvent ici. </p>
    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Read more
      <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </a>
  </div>
</div>

  {/* Repeat the above div for each card */}
</div>
    </div>
    </section>


    <Map imageUrl={imageUrl} imageBounds={imageBounds} capturedZones={capturedZones} />
<Footer></Footer>
    </Wrapper>

    </div>

        

    
    </div>
  );
};

export default Wiki;

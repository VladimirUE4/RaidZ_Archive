import Wrapper from "@/components/wrapper";
import { Link } from "react-router-dom";
import Footer from "@/components/typo/Footer"
const Wikicommunautes = () => {
    return (
      <div className="min-h-screen bg-custom-poker bg-cover bg-no-repeat bg-center relative">
<Wrapper className="flex flex-col items-start justify-center mb-16">
  <div role="status" className="space-y-8 md:space-y-0 mb-5 md:space-x-8 rtl:space-x-reverse flex flex-col md:flex-row md:items-center ml-8">
    <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700 bg-custom-valentine bg-cover bg-center"></div>
    <div className="">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white ">La communauté de <mark className="px-1 text-white bg-blue-600 rounded dark:bg-blue-500">Valentine</mark></h1>
      <div className="h-2 rounded-full mb-2.5"><p>Une belle communauté habitant près dans le beau village de Valentine</p></div>
    </div>
    <span className="sr-only">Loading...</span>
  </div>

  <Link to="/wiki/blackwatercommu">
    <div role="status" className="space-y-8 md:space-y-0 mb-5 md:space-x-8 rtl:space-x-reverse flex flex-col md:flex-row md:items-center ml-8">
      <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700 bg-custom-blackwater bg-cover bg-center"></div>
      <div className="">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">La communauté de <mark className="px-1 text-white bg-red-600 rounded dark:bg-red-500">Blackwater</mark></h1>
        <div className="h-2 rounded-full mb-2.5"><p>Un coeur a prendre, une ville à prendre</p></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  </Link>

  <Link to="/wiki/saintdeniscommu">
    <div role="status" className="space-y-8 md:space-y-0 mb-5 md:space-x-8 rtl:space-x-reverse flex flex-col md:flex-row md:items-center ml-8">
      <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700 bg-custom-saintdenis bg-cover bg-center"></div>
      <div className="">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">La communauté de <mark className="px-1 text-white bg-purple-600 rounded dark:bg-purple-500">Saint-Denis</mark></h1>
        <div className="h-2 rounded-full mb-2.5"><p>Ils sont sympas mais ils aiment la viande crue, voir très crue </p></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  </Link>
</Wrapper>

<Footer></Footer>

</div>
);
};

export default Wikicommunautes;

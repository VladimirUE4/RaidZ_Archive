
import {StickyScroll} from "@/components/typo/sticky-scroll-reveal"


const content = [
  {
    title: "Saint Denis",
    description:
      "Saint Denis est une ville animée et cosmopolite située sur les rives du fleuve Lannaheche. Avec ses rues pavées, ses bâtiments en briques rouges et ses nombreux commerces, la ville offre une expérience unique alliant histoire et modernité. Que vous soyez à la recherche de divertissements, de culture ou simplement d'une escapade citadine, Saint Denis a quelque chose à offrir à chacun.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white bg-custom-saintdenis bg-cover bg-center">
      </div>
    ),
  },
  {
    title: "Valentine",
    description:
      "Valentine est une petite ville pittoresque située dans le Grand Ouest américain. Avec ses rues poussiéreuses et ses bâtiments en bois, cette ville est un véritable trésor historique. Que vous soyez un fan de l'histoire de l'Ouest ou simplement à la recherche d'un endroit charmant à visiter, Valentine est une destination incontournable.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white bg-custom-valentine bg-cover bg-center">
      </div>
    ),
  },
  {
    title: "Blackwater",
    description:
      "Blackwater est une ville prospère et en pleine expansion située sur les rives du fleuve Kamassa. Avec ses rues bordées de bâtiments modernes, ses quais animés et ses nombreux commerces, Blackwater est un exemple parfait de la réussite industrielle de l'Ouest. Que vous soyez à la recherche d'opportunités économiques, de divertissements ou simplement d'une ville dynamique à explorer, Blackwater est une destination de choix.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white bg-custom-blackwater bg-cover bg-center">
      </div>
    ),
  },

];
const Blackwatercommu = () => {
  return (


<StickyScroll content={content} />
    
  );
};

export default Blackwatercommu;



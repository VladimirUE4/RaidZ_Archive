
import { BentoGrid, BentoGridItem } from "@/components/typo/bento-grid";

 
export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-custom-blackwater bg-cover bg-no-repeat bg-center from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Le mexique en feu",
    description: "Il y'a le feu au mexique c'est chaud piquant.",
    header: <Skeleton />,

  },
  {
    title: "Attrapez le ",
    description: "Il s'est enfui, arriverez vous à le retrouver?",
    header: <Skeleton />,
  },
  {
    title: "Patch-Notes #1",
    description: "Le dernier patch-notes vient de tomber, préparez vous à du lourd",
    header: <Skeleton />,
  },
  {
    title: "J'ai plus d'inspi ça casse les couilles",
    description:
      "J'aimerais m'acheter la ps5 pour gta6 vous en pensez quoi ?",
    header: <Skeleton />,
  },
  {
    title: "La j'écoute the neptuns",
    description: "c'est un groupe ou pharell williams était producteur, ça s'ecoute bien",
    header: <Skeleton />,
  },
  {
    title: "En vrai sa carriere solo est explosé je trouve ",
    description: "enfin j'aime pas trop ses musiques mais en producteur il gere  par contre chez LV eclaté ce qu'il a fait",
    header: <Skeleton />,

  },
  {
    title: "c'est bon j'ai fini de meubler ",
    description: "Ikea les meubles ikea les meubles ikeaaa castorama bricorama intermarché leclerc carrefour.",
    header: <Skeleton />,
  },
];
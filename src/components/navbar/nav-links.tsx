import { Group} from "lucide-react";
import NavLinkItem from "./nav-link-item";

const itemsArray = [

  {
    title: "Wiki",
    icon: Group,
    redirect: "/wiki",
  },
  {
    title: "Videos",
    icon: Group,
    redirect: "/Videos",
  },
];

const NavLinks = () => {
  return (
    <ul className="flex items-center justify-between gap-4">
      {itemsArray.map((item, index) => {
        return <NavLinkItem key={index} {...item} />;
      })}
    </ul>
  );
};

export default NavLinks;

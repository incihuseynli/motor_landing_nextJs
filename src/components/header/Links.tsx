import { menu } from "@/datas/data";
import Link from "next/link";

const Links = () => {
  return (
    <>
      {menu.map(({ id, title, path }) => {
        return (
          <Link
            href={path}
            key={id}
            className="text-base font-medium uppercase tracking-wider text-primary hover:text-primary/50 transition-all duration-700 ease-in-out"
          >
            {title}
          </Link>
        );
      })}
    </>
  );
};

export default Links;

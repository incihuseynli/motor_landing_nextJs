import { IListProps } from "@/types/types";
import Image from "next/image";
import React from "react";

const List = ({ data, listTitle }: IListProps) => {
  return (
    <div className="flex items-center justify-center md:items-start md:justify-start">
      <ul className="flex flex-col gap-4">
        {listTitle && (
          <h5 className="font-bold text-3xl text-primary capitalize">
            {listTitle}
          </h5>
        )}
        {data.map(({ id, title, icon }) => {
          return (
            <li
              key={id}
              className="flex items-center gap-4 text-primary text-lg"
            >
              <Image src={icon} alt="This is an icon" width={32} height={32} />
              {title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;

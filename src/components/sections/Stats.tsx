import { stats } from "@/datas/data";
import React from "react";

const Stats = () => {
  return (
    <section className="grid grid-cols-1 min-[424px]:grid-cols-2 gap-4 min-[570px]:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 place-items-center">
      {stats.map(({ id, statNumber, statDesc, title }) => {
        return (
          <div
            key={id}
            className="rounded-md text-center flex flex-col items-center justify-center w-44 h-36 box-shadow-custom"
          >
            <h6 className="text-5xl font-extrabold uppercase text-primary">
              {statNumber}{" "}
              <span className="text-base normal-case">{statDesc}</span>
            </h6>
            <p className="mt-2 text-lg font-extralight tracking-wide text-primary/95">
              {title}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default Stats;

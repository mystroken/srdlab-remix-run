import { priorities } from "~/data/priority";
import type { PriorityType } from "~/types";
import { cleanText } from "~/utils/helpers";
import { useState } from "react";

export default function PrioritesComponent() {
  const [showText, setShowText] = useState(false);
  return (
    <div className="bg-[#f6fafe]">
      <div className="py-16 md:py-44">
        <div className="container mx-auto">
          <div className="flex flex-row">
            <div className="w-full">
              <p className="text-secondary mt-2 text-lg md:text-xl">
                Nos priorités
              </p>
              <div className="pt-[3rem]">
                <div className="grid md:grid-cols-4 gap-y-2 md:gap-y-0 md:gap-x-4 grid-cols-1">
                  {priorities.map((item: PriorityType, index) => {
                    return (
                      <div key={index}>
                        <img
                          loading="lazy"
                          src={item.image}
                          style={{ width: "6rem", height: "6rem" }}
                        />
                        <h2 className="md:h-28 pt-7 pb-3 md:w-[14rem] xl:w-[16text-[1.2rem] leading-[130%] text-primary">
                          {item.title}
                        </h2>
                        <p
                          className={`md:w-[14rem] text-justify xl:w-[16rem] text-[0.7rem] leading-[185%] pr-10 md:pr-0 ${
                            showText === false ? "flex" : "hidden"
                          }`}
                        >
                          {cleanText(item.description, 200)}
                        </p>
                        <p
                          onClick={() => setShowText(!showText)}
                          className={`${
                            showText === false ? "flex" : "hidden"
                          } pt-[.3rem] cursor-pointer text-[0.7rem] text-black leading-[185%] text-justify underline`}
                        >
                          Lire la suite
                        </p>
                        <span
                          className={`md:w-[14rem] xl:w-[16rem] text-[0.7rem] leading-[185%] pr-10 text-justify md:pr-0 ${
                            showText === true ? "flex" : "hidden"
                          }`}
                        >
                          {" "}
                          {item.description}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

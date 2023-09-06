import { useState } from "react";
import { valeurs } from "~/data/valeurs";
import { cleanText } from "~/utils/helpers";

export default function NosValeursComponent() {
  const [showText, setShowText] = useState(false);
  return (
    <div>
      <div className="py-16 md:py-44">
        <div className="container mx-auto">
          <div className="flex flex-row">
            <div className="w-full">
              <p className="text-secondary mt-2 text-lg md:text-xl">
                Nos valeurs{" "}
              </p>
              <h1 className="text-primary mt-1 text-xl md:leading-[120%] md:text-[2rem]  md:mr-8 md:w-[40rem] text-justify">
                Chez SRDLab, nous sommes intègre, fiable, socialement
                responsables et nous respectons la confidentialité des
                informations et des données.
              </h1>
              <div className="pt-[3rem]">
                <div className="grid md:grid-cols-4 grid-cols-1 gap-y-3 md:gap-y-0 md:gap-x-2">
                  {valeurs.map((item, index) => {
                    return (
                      <div
                        className={`bg-primary ${
                          showText === true ? "h-[28rem]" : "h-[18rem]"
                        } w-full md:w-[16rem] px-[1.3rem] mb-12 md:mb-0`}
                        key={index}
                      >
                        <h2 className="pt-[3.3rem] text-white text-[1.2rem] leading-[175%]">
                          {item.title}
                        </h2>
                        <p
                          className={`${
                            showText === false ? "flex" : "hidden"
                          } pt-[1.3rem] text-[0.7rem] text-white leading-[185%] text-justify`}
                        >
                          {cleanText(item.content, 200)}
                        </p>
                        <p
                          onClick={() => setShowText(!showText)}
                          className={`${
                            showText === false ? "flex" : "hidden"
                          } pt-[1.3rem] cursor-pointer text-[0.7rem] text-white leading-[185%] text-justify underline`}
                        >
                          Lire la suite
                        </p>
                        <p
                          className={`${
                            showText === true ? "flex" : "hidden"
                          } pt-[1.3rem] text-[0.7rem] text-white leading-[185%] text-justify`}
                        >
                          {item.content}
                        </p>
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

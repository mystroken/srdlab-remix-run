import { solutions } from "~/data/solutions";
import type { SolutionsType } from "~/types";
import Aperture from "../../../assets/imgs/aperture.png";
import { useState } from "react";
import { cleanText } from "~/utils/helpers";
import { Image } from "remix-image";
import { useTranslation } from "react-i18next";

export default function SolutionsComponent() {
  const [showText, setShowText] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="bg-[#F6FAFE]">
      <div className="pt-[6rem]">
        <div className="container mx-auto">
          <div className="flex flex-row">
            <div className="w-full md:w-3/4">
              <p className="text-secondary mt-2 text-lg md:text-xl">
                {t("solution-span")}
              </p>
              <h1 className="text-primary mt-1 text-2xl md:text-5xl">
                {t("solution-title")}
              </h1>
              <p className="mt-2 text-sm md:mt-5 md:text-[1rem] leading-[1.7rem] md:w-[40rem] text-justify">
                {t("solution-cont1")}
                <br />
                <br />
                {t("solution-cont2")}
              </p>
            </div>
            <div className="xl:flex  hidden  w-1/4">
              <div className="absolute left-[81.88%] right-[4.62%] w-[194px] h-[200px]"></div>
              <div className="absolute left-[83.56%] right-[3.1%] w-[190px] h-[110px] mt-[4%]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-other mx-auto pt-[2.6rem] pb-[7rem]">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 -mx-1 lg:-mx-2 bg-[#e1e1e1] py-10">
          {solutions.map((item: SolutionsType, index) => {
            return (
              <div
                className="my-[2.2rem] px-1 lg:my-4 mx-2 lg:px-4"
                key={index}
              >
                <article className="mb-4 md:mb-0">
                  <div className="flex justify-start items-center">
                    <Image src={Aperture} alt="" />
                  </div>
                  <div className="mt-[.8rem]">
                    <h1 className="text-primary py-1 text-[1.2rem] leading-[155%] font-semibold text-start">
                      {t(item.title)}
                    </h1>
                    <div>
                      <p
                        className={`pt-[.8rem] text-[.8rem] leading-[170%] text-[#505A62] text-justify ${
                          showText === false ? "flex" : "hidden"
                        }`}
                      >
                        {cleanText(t(item.content), 150)}
                      </p>
                      <p
                        className={`pt-[.8rem] text-[.8rem] leading-[170%] text-[#505A62] text-justify ${
                          showText === true ? "flex" : "hidden"
                        }`}
                      >
                        {t(item.content)}
                      </p>
                      <p
                        onClick={() => setShowText(!showText)}
                        className={`${
                          showText === false ? "flex" : "hidden"
                        } pt-[.3rem] cursor-pointer text-[0.7rem] text-black leading-[185%] text-justify underline`}
                      >
                        {t("more")}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


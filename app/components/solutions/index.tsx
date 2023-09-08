import { solutions } from "~/data/solutions";
import type { SolutionsType } from "~/types";
import Aperture from "../../../assets/imgs/aperture.png";
import { useState } from "react";
import { cleanText } from "~/utils/helpers";
import { Image } from "remix-image";

export default function SolutionsComponent() {
  const [showText, setShowText] = useState(false);
  return (
    <div className="bg-[#F6FAFE]">
      <div className="pt-[7rem]">
        <div className="container mx-auto">
          <div className="flex flex-row">
            <div className="w-full md:w-3/4">
              <p className="text-secondary mt-2 text-lg md:text-xl">
                Toutes nos
              </p>
              <h1 className="text-primary mt-1 text-2xl md:text-5xl">
                Solutions
              </h1>
              <p className="mt-2 text-sm md:mt-5 md:text-[1rem] leading-[1.7rem] md:w-[40rem] text-justify">
                En tant que cabinet spécialisé dans la collecte de données, les
                études sociales et économiques, ainsi que la gestion de projet
                et la formation, nous vous proposons une gamme complète de
                services qui permettront la réalisation de vos projets. Avec
                notre expertise approfondie et multidisciplinaire, nous sommes
                là pour vous accompagner de la conception à la mise en œuvre de
                vos projets y compris l’évaluation de leurs impacts pour les
                populations cible, afin de garantir des résultats durables et
                positifs.
                <br />
                <br />
                Notre approche holistique et intégrée nous permet de vous
                proposer des solutions complètes et adaptées à vos besoins
                spécifiques
              </p>
            </div>
            <div className="xl:flex  hidden  w-1/4">
              <div className="absolute left-[81.88%] right-[4.62%] w-[194px] h-[200px]">
                {/* <Image src="~/assets/Images/vect-second.png" alt="" /> */}
              </div>
              <div className="absolute left-[83.56%] right-[3.1%] w-[190px] h-[110px] mt-[4%]">
                {/* <Image src="~/assets/Images/vect-prim.png" alt="" /> */}
              </div>
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
                      {item.title}
                    </h1>
                    <div onClick={() => setShowText(!showText)}>
                      <p
                        className={`pt-[.8rem] text-[.8rem] leading-[170%] text-[#505A62] text-justify ${
                          showText === false ? "flex" : "hidden"
                        }`}
                      >
                        {cleanText(item.content, 150)}
                      </p>
                      <p
                        className={`pt-[.8rem] text-[.8rem] leading-[170%] text-[#505A62] text-justify ${
                          showText === true ? "flex" : "hidden"
                        }`}
                      >
                        {item.content}
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


import { ABOUT } from "~/data/images";
import { useState } from "react";

export default function NousSommesComponent() {
  const [showText, setShowText] = useState(false);
  return (
    <div>
      <div className="py-16 md:py-44">
        <div className="container mx-auto">
          <div className="flex flex-row">
            <div className="w-full lg:w-3/4">
              <p className="text-justify text-secondary mt-2 text-lg md:text-xl">
                Qui sommes-nous ?
              </p>
              <h1 className="text-primary mt-1 text-xl md:leading-[120%] md:text-[2rem]  xl:mr-8 md:mr-8 xl:w-[40rem] text-justify py-4 md:py-0">
                un cabinet d’étude producteur de données et de formations pour
                l’aide aux décisions économiques et socio-démographiques
              </h1>
              <p
                className={`mt-2 md:mt-10 md:w-[29rem] text-[#333333] text-sm md:text-[1rem] text-justify leading-[175%] ${
                  showText === false ? "flex" : "hidden"
                }`}
              >
                SRDLab, fondé en 2020, est un cabinet d'études et de conseils
                spécialisé dans la collecte de données, les études économiques,
                sociales et démographiques, l'analyse et la gestion de projets,
                ainsi que la formation. Nos partenaires proviennent des secteurs
                privé, public, institutionnel et de la recherche axée sur le
                développement. Notre équipe multidisciplinaire travaille en
                étroite collaboration avec ces acteurs pour leurs fournir des
                solutions adaptées et les aider à prendre des décisions
                éclairées.
              </p>
            </div>
            <img
              src={ABOUT}
              className={`md:flex justify-end hidden rounded-lg w-1/2 h-auto bg-cover`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}


import {ABOUT} from "~/data/images";

export default function NousSommesComponent() {
    return (
        <div>
            <div className="py-16 md:py-44">
                <div className="container mx-auto">
                    <div className="flex flex-row">
                        <div className="w-full lg:w-3/4">
                            <p className="text-justify text-secondary mt-2 text-lg md:text-xl">
                                Qui sommes-nous ?
                            </p>
                            <h1
                                className="text-primary mt-1 text-xl md:leading-[120%] md:text-[2rem]  xl:mr-8 md:mr-8 xl:w-[40rem] text-start py-4 md:py-0">
                                un cabinet d’étude producteur de données et de formations pour l’aide aux décisions
                                économiques et socio-démographiques
                            </h1>
                            <p
                                className="mt-2 md:mt-10 md:w-[29rem] text-[#333333] text-sm md:text-[1rem] text-start leading-[175%]">
                                SRDLab est un cabinet dédié à la collecte de données quantitatives et qualitatives et à
                                la
                                réalisation d’études économiques, sociales et démographiques afin d’accompagner les
                                décideurs dans la prise de meilleures mesures. SRDLab élargi son activité en proposant
                                des
                                formations alliant théorie et pratique.
                                <br/>
                                <br/>
                                Nos partenaires sont les décideurs des secteurs privés, publics et institutionnels ainsi
                                que
                                les chercheurs qui œuvrent pour le développement.
                            </p>

                        </div>
                        <img src={ABOUT}
                             className={`md:flex justify-end hidden rounded-lg`} style={{width: '24rem', height: 'auto'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
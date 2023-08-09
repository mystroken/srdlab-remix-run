import BannerComponent from "~/components/banner";
import {DefaultLayout} from "~/layouts/default";
import React, {useState} from "react";
import {realisations} from "~/data/realisations";
import {PosteType} from "~/types";
import Realisations from "~/components/realisations";


export default function NosRessourcesRoute() {
    const [openAll, setOpenAll] = useState(true)
    const [openRealise, setOpenRealise] = useState(false)
    const [openEnCours, setOpenEnCours] = useState(false)

    const selectRealise = () => {
        setOpenAll(false)
        setOpenEnCours(false)
        setOpenRealise(true)
    }

    const selectEnCours = () => {
        setOpenAll(false)
        setOpenEnCours(true)
        setOpenRealise(false)
    }

    const selectAll = () => {
        setOpenAll(true)
        setOpenEnCours(false)
        setOpenRealise(false)
    }
    return (
        <>
            <DefaultLayout>
                <BannerComponent title="Nos realisations"
                                 content="SRDLab à la pointe des nouvelles technologiques. Pour l’exécution de vos travaux, nous utilisons les outils les plus récents et les méthodes innovantes."/>
                <div className="container mx-auto">
                    <div className="py-16 md:py-44">
                        <div
                            className={"flex mt-20 md:mt-0 flex-row justify-center items-center space-x-8 text-sm font-normal"}>
                            <div
                                onClick={selectAll}
                                className={`cursor-pointer ${openAll ? 'bg-orange rounded-full text-xs px-4 py-2' : ''}`}>TOUT
                            </div>
                            <div
                                className={`${openRealise ? 'bg-orange rounded-full text-xs px-4 py-2' : ''} cursor-pointer`}
                                onClick={selectRealise}>EN COURS
                            </div>
                            <div
                                className={`${openEnCours ? 'bg-orange rounded-full text-xs px-4 py-2' : ''} cursor-pointer`}
                                onClick={selectEnCours}>ACHEVEES
                            </div>
                        </div>
                        <div
                            className="grid sm:grid-cols-2 md:grid-cols-3 container pt-10 gap-y-4  md:gap-x-10">
                            {
                                openAll && realisations.map((item: PosteType, index: number) => {
                                    return (
                                        <Realisations key={index} open={item.open} slug={item.slug} name={item.name}
                                                      title={item.title} date={item.date} role={item.role}
                                                      context={item.context} description={item.description}/>
                                    );
                                })
                            }
                            {
                                openRealise && realisations.map((item: PosteType, index: number) => {
                                    while (item.open === openRealise) {
                                        return (
                                            <Realisations key={index} open={item.open} slug={item.slug} name={item.name}
                                                          title={item.title} date={item.date} role={item.role}
                                                          context={item.context} description={item.description}/>
                                        );
                                    }
                                })
                            }
                            {
                                openEnCours && realisations.map((item: PosteType, index: number) => {
                                    while (item.open === false) {
                                        return (
                                            <Realisations key={index} open={item.open} slug={item.slug} name={item.name}
                                                          title={item.title} date={item.date} role={item.role}
                                                          context={item.context} description={item.description}/>
                                        );
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </>
    )
}
import BannerComponent from "~/components/banner";
import {DefaultLayout} from "~/layouts/default";
import {useState} from "react";
import {services} from "~/data/services";
import {domaines} from "~/data/domaines";
import Expertises from "~/components/expertises";


export default function ExpertisesRoute() {
    const [selectDomaine, setSelectDomaine] = useState(true)
    const [selectService, setSelectService] = useState(false)

    const changeSelectDomaine = () => {
        setSelectDomaine(true)
        setSelectService(false)
    }

    const changeSelectService = () => {
        setSelectService(true)
        setSelectDomaine(false)
    }

    return (
        <>
            <DefaultLayout>
                <BannerComponent title="Notre expertise"
                                 content="SRDLab à la pointe des nouvelles technologiques. Pour l’exécution de vos travaux, nous utilisons les outils les plus récents et les méthodes innovantes."/>
                <div>
                    <div className="py-16 md:py-44">
                        <div className="container mx-auto">
                            <div className="flex flex-row">
                                <div className="w-full">
                                    <div
                                        className={`flex space-y-4 md:space-y-0 md:space-x-8 md:flex-row justify-center items-center flex-col`}>
                                        <div onClick={changeSelectDomaine} className={`md:w-[18rem`}>
                                            <button
                                                className={`${selectDomaine ? 'bg-orange' : ''} rounded-full text-[.9rem] text-primary px-[30px] py-[10px] md:py-[16px] md:px-[48px] w-full font-semibold`}>Nos
                                                domaines d’expertise
                                            </button>
                                        </div>
                                        <div onClick={changeSelectService} className={`md:w-[18rem`}>
                                            <button
                                                className={`${selectService ? 'bg-orange' : ''} rounded-full text-[.9rem] text-primary px-[30px] py-[10px] md:py-[16px] md:px-[48px] w-full font-semibold`}>Nos
                                                services proposés
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {selectDomaine && (
                                <div>
                                    <div className="pt-[3rem]">
                                        <div
                                            className="grid sm:grid-cols-2 md:grid-cols-3 container pt-10 gap-y-4  md:gap-x-10">
                                            {
                                                domaines.map((item: any, index) => {
                                                    return (
                                                        <Expertises
                                                            key={index}
                                                            open={item.open}
                                                            slug={item.slug}
                                                            name={item.title}
                                                            picture={item.picture}
                                                        />
                                                        // <a href={`/expertises/${item.slug}`} key={index}
                                                        //    className="h-44 md:h-40 md:mb-6 md:w-11/12 cursor-pointer">
                                                        //     <div
                                                        //         className="p-4 border border-gray-400 hover:border-orange hover:bg-orange hover:border-2 flex items-start flex-col justify-center rounded-md h-full">
                                                        //         <h2
                                                        //             className="md:w-[14rem] xl:w-[18rem] text-[1.1rem] text-primary">{item.title}</h2>
                                                        //         <h2
                                                        //             className="text-[0.7rem] mt-2 font-normal leading-[130%] text-primary">{cleanText(item.subtitle, 80)}</h2>
                                                        //     </div>
                                                        // </a>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            )}
                            {selectService && (
                                <div className="bg-white">
                                    <div className="pt-[7rem]">
                                        <div className="container mx-auto">
                                            <div className="flex flex-row">
                                                <div className="w-full">
                                                    <p className="text-secondary mt-2 text-lg md:text-xl">Nos
                                                        services proposés</p>
                                                    <p className="mt-2 text-sm md:mt-5 md:text-[1rem] leading-[1.7rem] ">
                                                        En tant que cabinet spécialisé dans la collecte de données, les
                                                        études sociales et économiques, ainsi
                                                        que la gestion de projet et la formation, nous vous proposons
                                                        une gamme complète de services qui
                                                        permettront la réalisation de vos projets. Avec notre expertise
                                                        approfondie et multidisciplinaire,
                                                        nous sommes là pour vous accompagner de la conception à la mise
                                                        en œuvre de vos projets y
                                                        compris l’évaluation de leurs impacts pour les populations
                                                        cible, afin de garantir des résultats
                                                        durables et positifs.
                                                    </p>
                                                    <p className="mt-2 text-sm md:mt-5 md:text-[1rem] leading-[1.7rem] ">
                                                        Notre approche holistique et intégrée nous permet de vous
                                                        proposer des solutions complètes et
                                                        adaptées à vos besoins spécifiques : <b> «Donc ici on a quatre
                                                        boutons et quand on clique ca ouvre sur
                                                        les texte que tu vois dans la page ci-dessous»</b>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="pt-[3rem]">
                                                <div className="grid md:grid-cols-3 grid-cols-1 gap-y-4">
                                                    {
                                                        services.map((item: any, index) => {
                                                            return (
                                                                <a href={`/expertise-services/${item.slug}`} key={index}
                                                                   className="h-44 md:h-40 md:mb-6 md:w-11/12 cursor-pointer">
                                                                    <div
                                                                        className="p-4 border border-gray-400 hover:border-orange hover:bg-orange hover:border-2 flex items-center flex-col justify-center rounded-md h-full">
                                                                        <h2
                                                                            className="text-center md:w-[14rem] xl:w-[18rem] text-[1.1rem] text-primary">{item.title}</h2>
                                                                    </div>
                                                                </a>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </>
    )
}
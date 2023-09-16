import BannerComponent from "~/components/banner";
import {DefaultLayout} from "~/layouts/default";
import React, {useState} from "react";
import {realisations} from "~/data/realisations";
import Realisations from "~/components/realisations";
import {BUT} from "~/data/images";

export default function NosRessourcesRoute() {
    const [openAll, setOpenAll] = useState(true);
    const [openRealise, setOpenRealise] = useState(false);
    const [openEnCours, setOpenEnCours] = useState(false);

    const selectRealise = () => {
        setOpenAll(false);
        setOpenEnCours(false);
        setOpenRealise(true);
    };

    const selectEnCours = () => {
        setOpenAll(false);
        setOpenEnCours(true);
        setOpenRealise(false);
    };

    const selectAll = () => {
        setOpenAll(true);
        setOpenEnCours(false);
        setOpenRealise(false);
    };
    return (
        <>
            <DefaultLayout>
                <BannerComponent
                    title="Nos realisations"
                    content="Découvrez nos réalisations achevées et celles qui sont en cours."
                />
                <div className="container mx-auto">
                    <div className="flex justify-center items-center my-10">
                        <img className="w-full md:w-60 h-auto" loading="lazy" src={BUT}/>
                    </div>
                    <div className="py-10">
                        <div
                            className={
                                "flex md:mt-0 flex-row justify-center items-center space-x-8 text-sm font-normal"
                            }
                        >
                            <div
                                onClick={selectAll}
                                className={`cursor-pointer ${
                                    openAll ? "bg-orange rounded-full text-xs px-4 py-2" : ""
                                }`}
                            >
                                TOUT
                            </div>
                            <div
                                className={`${
                                    openRealise
                                        ? "bg-green-500 text-white rounded-full text-xs px-4 py-2"
                                        : ""
                                } text-center cursor-pointer`}
                                onClick={selectRealise}
                            >
                                EN COURS
                            </div>
                            <div
                                className={`${
                                    openEnCours
                                        ? "bg-red-500 rounded-full text-xs text-white px-4 py-2"
                                        : ""
                                } cursor-pointer`}
                                onClick={selectEnCours}
                            >
                                ACHEVEES
                            </div>
                        </div>

                        <div className="flex items-center justify-center mt-12">


                        </div>

                        <div className="grid sm:grid-cols-2 md:grid-cols-3 container pt-10 gap-y-4  md:gap-x-10">
                            {openAll &&
                                realisations.map((item: any, index: number) => {
                                    return (
                                        <Realisations
                                            key={index}
                                            open={item.open}
                                            slug={item.slug}
                                            name={item.name}
                                            title={item.title}
                                            date={item.date}
                                            picture={item.picture}
                                            role={item.role}
                                            context={item.context}
                                            description={item.description}
                                        />
                                    );
                                })}
                            {openRealise &&
                                realisations.map((item: any, index: number) => {
                                    while (item.open === openRealise) {
                                        return (
                                            <Realisations
                                                key={index}
                                                open={item.open}
                                                slug={item.slug}
                                                name={item.name}
                                                title={item.title}
                                                date={item.date}
                                                role={item.role}
                                                picture={item.picture}
                                                context={item.context}
                                                description={item.description}
                                            />
                                        );
                                    }
                                })}
                            {openEnCours &&
                                realisations.map((item: any, index: number) => {
                                    while (item.open === false) {
                                        return (
                                            <Realisations
                                                key={index}
                                                open={item.open}
                                                slug={item.slug}
                                                name={item.name}
                                                title={item.title}
                                                date={item.date}
                                                picture={item.picture}
                                                role={item.role}
                                                context={item.context}
                                                description={item.description}
                                            />
                                        );
                                    }
                                })}
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </>
    );
}


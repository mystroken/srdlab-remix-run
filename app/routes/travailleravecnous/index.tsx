import BannerComponent from "~/components/banner";
import {DefaultLayout} from "~/layouts/default";
import {Button} from "~/components/commons/button";
import {TEAM} from "~/data/images";

export default function TravaillerAvecNousRoute() {
    return (
        <>
            <DefaultLayout>
                <BannerComponent
                    title="Travailler avec nous"
                    content="Demandez nos services ou rejoignez notre équipe pour concrétiser vos objectifs."
                />
                <div className="bg-white">
                    <div className="pt-[7rem]">
                        <div className="container mx-auto">
                            <div className="flex flex-row">
                                <div className="w-full md:w-3/4">
                                    <p className="text-secondary mt-2 text-lg md:text-xl">
                                        Bienvenue dans notre
                                    </p>
                                    <h1 className="text-primary mt-1 text-2xl md:text-5xl">
                                        Espace Collaboratif
                                    </h1>
                                    <p className="mt-2 text-sm md:mt-5 md:text-[1rem] leading-[1.7rem] md:w-[40rem] text-justify">
                                        Nous sommes ravis de vous accueillir sur notre page
                                        "Travaillez avec Nous". Chez SRD Lab, nous croyons en la
                                        puissance de la collaboration et de l'engagement pour
                                        réaliser des projets exceptionnels. Que vous souhaitiez
                                        faire partie de notre équipe talentueuse ou que vous
                                        représentiez une organisation à la recherche de services
                                        exceptionnels, vous êtes au bon endroit. <br/>
                                        <br/>
                                        Nous croyons fermement que chaque interaction est une
                                        opportunité de créer de la valeur et de bâtir des relations
                                        positives. Nous vous remercions de considérer SRD Lab comme
                                        votre partenaire potentiel.
                                        <br/>
                                        <br/>
                                        Collaborons pour réussir la réalisation de projets
                                        exceptionnels. Ensemble, nous accomplirons de grandes
                                        choses.
                                        <br/>
                                        <br/>
                                        Utilisez les boutons ci-dessous pour accéder à dans notre
                                        monde d'opportunités. Nous sommes impatients de collaborer
                                        avec vous.
                                    </p>
                                    <div className="py-10 md:py-20">
                                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                            <a
                                                href={"/rejoindre-notre-equipe"}
                                                className="md:w-[20rem]"
                                            >
                                                <Button name="Rejoindre Notre Equipe"/>
                                            </a>
                                            <a
                                                href={"/sollicitez-nos-services"}
                                                className="md:w-[23rem]"
                                            >
                                                <Button name="Sollicitez Nos Services"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className={'row hidden md:flex ml-2 md:w-1/2 space-x-2'}>
                                    <div className={"rounded-md h-2/3 w-1/2"}>
                                        <img src={TEAM} loading={"lazy"} className={'h-full rounded-lg object-cover'}/>
                                    </div>
                                    <div className={'h-2/3 w-1/2 flex flex-col space-y-2'}>
                                        <div className={'rounded-md h-1/2 w-full'}>
                                            <img src={TEAM} loading={"lazy"}
                                                 className={'h-full rounded-lg object-cover'}/>
                                        </div>
                                        <div className={'bg-yellow-500 rounded-md h-1/2 w-full'}>
                                            <img src={TEAM} loading={"lazy"}
                                                 className={'h-full rounded-lg object-cover'}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </>
    );
}


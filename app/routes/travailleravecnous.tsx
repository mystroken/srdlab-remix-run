import BannerComponent from "~/components/banner";
import {DefaultLayout} from "~/layouts/default";
import {Button} from "~/components/commons/button";


export default function TravaillerAvecNousRoute() {
    return (
        <>
            <DefaultLayout>
                <BannerComponent title="Travailler avec nous"
                                 content="SRDLab à la pointe des nouvelles technologiques. Pour l’exécution de vos travaux, nous utilisons les outils les plus récents et les méthodes innovantes."/>
                <div className="bg-white">
                    <div className="pt-[7rem]">
                        <div className="container mx-auto">
                            <div className="flex flex-row">
                                <div className="w-full md:w-3/4">
                                    <p className="text-secondary mt-2 text-lg md:text-xl">Bienvenue dans notre</p>
                                    <h1 className="text-primary mt-1 text-2xl md:text-5xl">Espace Collaboratif</h1>
                                    <p className="mt-2 text-sm md:mt-5 md:text-[1rem] leading-[1.7rem] md:w-[40rem] md:text-justify">
                                        Nous sommes ravis de vous accueillir sur notre page "Travaillez avec Nous". Chez
                                        SRD Lab, nous croyons en la puissance de la collaboration et de l'engagement
                                        pour réaliser des projets exceptionnels. Que vous souhaitiez faire partie de
                                        notre équipe talentueuse ou que vous soyez une organisation à la recherche de
                                        services exceptionnels, vous êtes au bon endroit. Collaborons pour des succès
                                        ensemble pour réussir la réalisation des projets exceptionnels.
                                        Prêt(e) à Passer à l'Action ?
                                    </p>
                                    <p className="mt-2 text-sm md:mt-5 md:text-[1rem] leading-[1.7rem] md:w-[40rem] md:text-justify">
                                        Nous sommes impatients de vous connaître. Utilisez les boutons ci-dessous pour
                                        explorer vos options et en apprendre davantage sur les opportunités qui vous
                                        attendent. Nous croyons fermement que chaque interaction est une opportunité de
                                        créer de la valeur et de bâtir des relations positives.
                                        Nous vous remercions de considérer SRD Lab comme votre partenaire potentiel.
                                        Ensemble, nous pouvons accomplir de grandes choses.
                                        Bienvenue dans notre monde d'opportunités !
                                    </p>
                                    <div className="py-16 md:py-32">
                                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                            <a href={"/rejoindre-notre-equipe"} className="md:w-[20rem]">
                                                <Button name="Rejoindre Notre Equipe"/>
                                            </a>
                                            <a href={"/sollicitez-nos-services"} className="md:w-[23rem]">
                                                <Button name="Sollicitez Nos Services"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </>
    )
}
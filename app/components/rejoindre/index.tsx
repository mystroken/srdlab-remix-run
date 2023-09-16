import {Button} from "~/components/commons/button";
import {TEAM} from "~/data/images";

export default function Rejoindre() {
    return (
        <div className="bg-white">
            <div className="pt-[7rem]">
                <div className="container mx-auto">
                    <div className="flex flex-row">
                        <div className="w-full md:w-3/4">
                            <p className="text-secondary mt-2 text-lg md:text-xl">Rejoignez notre</p>
                            <h1 className="text-primary mt-1 text-2xl md:text-5xl">Equipe</h1>
                            <p className="mt-2 text-sm md:mt-5 md:text-[1rem] leading-[1.7rem] md:w-[40rem] text-justify">
                                Si vous êtes passionné(e) par l'innovation, la créativité et le travail d'équipe, vous
                                pourriez bien être la personne que nous recherchons. Nous cherchons constamment à
                                élargir notre équipe avec des esprits passionnés et dévoués. Nous sommes à la quête des
                                personnes compétentes et engagées qui peuvent évoluer avec nous et nous aider à
                                satisfaire et même à dépasser les attentes de nos clients. Aussi, en travaillant avec
                                nous, vous aurez l'opportunité de développer vos compétences, de contribuer à des
                                projets stimulants et de faire partie d'une communauté dynamique axée sur l'excellence.
                            </p>
                            <div className="py-10 md:py-20">
                                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                    <a href={"/offre-emplois"} className="md:w-[20rem]">
                                        <Button name="Consultez nos offres d'emploi"/>
                                    </a>
                                    <a href={"/candidature"} className="md:w-[23rem]">
                                        <Button name="Envoyez une candidature spontanée"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={'row hidden md:flex ml-2 md:w-1/2 space-x-2'}>
                            <div className={"rounded-md h-2/3 w-full"}>
                                <img src={TEAM} loading={"lazy"} className={'h-full rounded-lg object-cover'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
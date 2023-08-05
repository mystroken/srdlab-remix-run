import {Button} from "~/components/commons/button";
import Team from "../../../assets/imgs/team.jpg";

export default function Rejoindre() {
    return (
        <div className="bg-white">
            <div className="pt-[7rem]">
                <div className="container mx-auto">
                    <div className="flex flex-row">
                        <div className="w-full md:w-3/4">
                            <p className="text-secondary mt-2 text-lg md:text-xl">Rejoignez notre</p>
                            <h1 className="text-primary mt-1 text-2xl md:text-5xl">Equipe</h1>
                            <p className="mt-2 text-sm md:mt-5 md:text-[1rem] leading-[1.7rem] md:w-[40rem]">
                                Nous sommes à la recherche de personnes
                                compétentes et engagées qui peuvent évoluer
                                avec nous et nous aider à satisfaire et même
                                à dépasser les attentes de nos clients. SRD
                                Lab est reconnu comme un employeur ouvert
                                qui se différencie par de vraies valeurs et
                                considère ses employés comme son atout le
                                plus important. SRD Lab est un employeur qui
                                respecte l'égalité des chances et ne pratique
                                aucune discrimination fondée sur l'âge, la race, la
                                religion, la nationalité, le sexe, ou toute autre
                                forme de discrimination.
                            </p>
                            <p className="mt-2 text-sm md:mt-5 md:text-[1rem] leading-[1.7rem] md:w-[40rem]">
                                Nous reconnaissons qu'il ne suffit pas
                                d'exécuter les tâches de votre poste pour
                                bâtir une carrière, mais qu'il est plus
                                important d'avoir un environnement de
                                travail qui vous permette de vous développer
                                et d'atteindre votre plein potentiel.
                            </p>
                            <p className="mt-2 text-sm md:mt-5 md:text-[1rem] leading-[1.7rem] md:w-[40rem]">
                                Vous souhaitez rejoindre une équipe dynamique qui s'appuie sur les forces de chacun,
                                tout en
                                favorisant les échanges et le partage des connaissances ? Vous êtes passionnés et vous
                                ambitionnés de travailler dans le domaine de l’humanitaire et pour le développement
                                sociales
                                et économiques des populations ? Alors, Laboratory for Survey and Research for
                                Development (SRD-Lab) pourrait être l’endroit idéal pour vous.
                            </p>
                            <div className="py-16">
                                <img className={`w-full h-auto`}
                                     src={Team} alt="team"/>
                            </div>
                            <div className="pb-16 md:pb-32">
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
                    </div>
                </div>
            </div>
        </div>
    )
}
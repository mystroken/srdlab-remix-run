import { Button } from "../commons/button";

export default function NewLetterComponent() {
    return (
        <div className="bg-secondary">
            <div className="py-[7rem]">
                <div className="container mx-auto">
                    <div className="flex flex-row">
                        <div className="w-full">
                            <h1
                                className="text-white mt-1 text-xl  md:leading-[120%] md:text-[2rem] md:mr-8 md:w-[28.8rem] text-start">
                                Vous voulez connaître les nouvelles et les mises à jour de nos services ?
                            </h1>
                            <p className="pt-[1.3rem] text-[#f6fafe] text-sm">Inscrivez-vous à la newsletter!</p>
                            <div className="pt-[3.2rem] pb-[2.8rem]">
                                <input className="border-separate bg-secondary border-white border-[1px] p-4 text-sm text-[#f6fafe] w-full md:w-[38rem]" type="text" placeholder="Entrez votre e-mail" />
                            </div>
                            <div className="md:w-[9.5rem]">
                                <Button name="S'inscrire" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

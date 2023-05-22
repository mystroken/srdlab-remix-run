import ExpertiseImg from "../../../assets/imgs/expertise.png"
export default function NosApproche() {
    return (
        <div>
            <div className="py-16 md:py-44">
                <div className="container mx-auto">
                    <div className="flex flex-row">
                        <div className="w-full">
                            <p className="text-secondary mt-2 tracking-wider text-xs uppercase">Notre approche </p>
                            <h1
                                className="text-primary mt-1 text-xl md:leading-[120%] md:text-[2rem]  md:mr-8 md:w-[30rem] md:max-w-[40rem] text-start">
                                Approche opérationnelle et stratégique
                            </h1>
                            <div className="pt-[3rem]">
                                <div>
                                    <img className="w-full md:w-[48rem] h-auto" src={ExpertiseImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
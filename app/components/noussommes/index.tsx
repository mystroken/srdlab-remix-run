import {TEAM} from "~/data/images";
import {useTranslation} from "react-i18next";

export default function NousSommesComponent() {
    const {t} = useTranslation();
    return (
        <div>
            <div className="py-12 md:py-20">
                <div className="container mx-auto">
                    <div className="flex flex-row space-x-12">
                        <div className="w-full lg:w-3/4">
                            <p className="text-justify text-secondary mt-2 text-lg md:text-xl">
                                {t("b-ns-t")}
                            </p>
                            <h1 className="text-primary mt-1 text-xl md:leading-[120%] md:text-[2rem] text-justify py-4 md:py-0">
                                {t("b-ns-c")}
                            </h1>
                            <p
                                className={`mt-2 md:mt-10 text-[#333333] text-sm md:text-[1rem] text-justify leading-[175%]`}
                            >
                                {t("b-ns-d")}
                            </p>
                        </div>
                        <div className={'row hidden md:flex md:w-1/2 space-x-2'}>
                            <div className={"rounded-md h-full w-full"}>
                                <img src={TEAM} loading={"lazy"} className={'h-full rounded-lg object-cover'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

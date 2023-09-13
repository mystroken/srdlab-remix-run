import {ABOUT} from "~/data/images";
import {useTranslation} from "react-i18next";

export default function NousSommesComponent() {
    const {t} = useTranslation();
    return (
        <div>
            <div className="py-12 md:py-36">
                <div className="container mx-auto">
                    <div className="flex flex-row">
                        <div className="w-full lg:w-3/4">
                            <p className="text-justify text-secondary mt-2 text-lg md:text-xl">
                                {t("b-ns-t")}
                            </p>
                            <h1 className="text-primary mt-1 text-xl md:leading-[120%] md:text-[2rem]  xl:mr-8 md:mr-8 xl:w-[40rem] text-justify py-4 md:py-0">
                                {t("b-ns-c")}
                            </h1>
                            <p
                                className={`mt-2 md:mt-10 md:w-[29rem] text-[#333333] text-sm md:text-[1rem] text-justify leading-[175%]`}
                            >
                                {t("b-ns-d")}
                            </p>
                        </div>
                        <img
                            src={ABOUT}
                            loading="lazy"
                            className={`md:flex justify-end hidden rounded-lg w-1/2 h-auto bg-cover`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

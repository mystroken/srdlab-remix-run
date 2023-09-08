import { publications } from "~/data/publications";
import type { PublicationType } from "~/types";
import Clock from "../../../assets/imgs/clock.svg";
import { Button } from "../commons/button";
import { cleanText } from "~/utils/helpers";
import { Image } from "remix-image";
import { useTranslation } from "react-i18next";

export default function PublicationComponent() {
  const { t } = useTranslation();
  return (
    <div className="bg-white">
      <div className="pt-[7rem]">
        <div className="container mx-auto">
          <div className="flex flex-row">
            <div className="w-full md:w-3/4">
              <p className="text-secondary mt-2 text-lg md:text-xl">
                {t("published-span")}
              </p>
              <h1 className="text-primary mt-1 text-2xl md:text-5xl">
                {t("publication")}
              </h1>
              <p className="text-justify mt-2 text-sm md:mt-5 md:text-[1rem] leading-[1.7rem] md:w-[40rem]">
                {t("publication-desc")}
              </p>
            </div>
            <div className="xl:flex  hidden  w-1/4">
              <div className="absolute left-[81.88%] right-[4.62%] w-[194px] h-[200px]"></div>
              <div className="absolute left-[83.56%] right-[3.1%] w-[190px] h-[110px] mt-[4%]"></div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 -mx-1 lg:-mx-4 container pt-10">
            {publications.map((item: PublicationType, index) => {
              return (
                <div className="my-1 px-1 lg:my-4 lg:px-4" key={index}>
                  <article className="rounded-lg mb-4 md:mb-0">
                    <Image
                      className="w-full h-[10rem] bg-cover"
                      alt={"pic"}
                      src={item.image}
                    />
                    <div className="pt-4">
                      <div className="flex items-center my-auto">
                        <Image
                          src={Clock}
                          className="w-[1.2rem] h-[1.2rem]"
                          alt=""
                        />
                        <div>
                          <p className="pl-2 text-[.8rem] leading-[170%]">
                            {t(item.date)}
                          </p>
                          <p className="pl-2 text-[.8rem] leading-[170%]">
                            {t(item.delay)}
                          </p>
                        </div>
                      </div>
                      <p className="md:h-16 text-justify text-primary py-3 text-[1rem] leading-[155%] font-semibold cursor-pointer ">
                        {cleanText(t(item.title), 40)}
                      </p>
                      <a
                        href={`publication/${item.slug}`}
                        className={`pt-[.3rem] cursor-pointer text-[0.7rem] text-black leading-[185%] text-justify underline underline-offset-4`}
                      >
                        {t("read-article")}
                      </a>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-[17rem] mx-auto py-[4rem] md:py-[7rem]">
        <Button name={t("publish-btn")} />
      </div>
    </div>
  );
}

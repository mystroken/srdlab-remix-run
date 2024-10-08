import React from "react";
import { Image } from "remix-image";
import { useTranslation } from "react-i18next";
import { confiances } from "~/data/confiances";

const ConfianceComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="pt-[5rem]">
        <div className="mx-auto">
          <p className="text-[##0E3758] mt-2 text-center text-lg mx-auto md:text-xl">
            {t("confiance")}
          </p>
        </div>
        <div className="container mx-auto md:overflow-x-hidden">
          <div className={"md:animate-marquee-infinite"}>
            <div
              className={`wscroolpub grid gap-y-12 xl:gap-y-0  sm:grid-cols-4 xl:grid-cols-5 -mx-1 lg:-mx-4 container py-10`}
            >
              {confiances.map((item, index) => (
                <div key={index} className="my-1 px-1 lg:my-4 lg:px-4">
                  <div className="w-full h-[4rem]">
                    <Image
                      src={item}
                      loading="lazy"
                      alt="pic"
                      className="w-full object-cover h-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfianceComponent;

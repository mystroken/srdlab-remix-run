import { confiances } from "~/data/confiances";
import { Image } from "remix-image";
import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";

export default function ConfianceComponent() {
  let { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="pt-[5rem]">
        <div className="mx-auto">
          <p className="text-[#0E3758] mt-2 text-center text-lg mx-auto md:text-xl">
            {t("confiance")}
          </p>
        </div>
        <div className="container mx-auto">
          <div className={`py-10`}>
            <Marquee>
              {confiances.map((item, index) => {
                return (
                  <div key={index} className="my-1 px-1 lg:my-4 lg:px-4">
                    <div className="w-full">
                      <Image
                        src={item}
                        loading="lazy"
                        alt="pic"
                        className="w-[12rem] object-cover h-auto"
                      />
                    </div>
                  </div>
                );
              })}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Button } from "../commons/button";
import { useTranslation } from "react-i18next";

export default function NewLetterComponent() {
  const { t } = useTranslation();
  return (
    <div className="bg-secondary">
      <div className="py-[7rem]">
        <div className="container mx-auto">
          <div className="flex flex-row">
            <div className="w-full">
              <h1 className="text-white mt-1 text-xl  md:leading-[120%] md:text-[2rem] md:mr-8 md:w-[28.8rem] text-start">
                {t("nl-t")}
              </h1>
              <p className="pt-[1.3rem] text-[#f6fafe] text-sm">{t("nl-c")}</p>
              <div className="pt-[3.2rem] pb-[2.8rem]">
                <input
                  className="border-separate bg-secondary border-white border-[1px] p-4 text-sm text-[#f6fafe] w-full md:w-[38rem]"
                  type="text"
                  placeholder={t("your-email")}
                />
              </div>
              <div className="md:w-[9.5rem]">
                <Button name={t("signup")} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


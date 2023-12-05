import BannerComponent from "~/components/banner";
import { DefaultLayout } from "~/layouts/default";
import { useState } from "react";
import { domaines } from "~/data/domaines";
import Expertises from "~/components/expertises";
import { services } from "~/data/services";

export default function ExpertisesRoute() {
  const [selectDomaine, setSelectDomaine] = useState(true);
  const [selectService, setSelectService] = useState(false);

  const changeSelectDomaine = () => {
    setSelectDomaine(true);
    setSelectService(false);
  };

  const changeSelectService = () => {
    setSelectService(true);
    setSelectDomaine(false);
  };

  return (
    <>
      <DefaultLayout>
        <BannerComponent
          title="Notre expertise"
          content="SRDLab à la pointe des nouvelles technologiques. Pour l’exécution de vos travaux, nous utilisons les outils les plus récents et les méthodes innovantes."
        />
        <div>
          <div className="py-16 md:py-44">
            <div className="container mx-auto">
              <div className="flex flex-row">
                <div className="w-full">
                  <div
                    className={`flex space-y-4 md:space-y-0 md:space-x-8 md:flex-row justify-center items-center flex-col`}
                  >
                    <div
                      onClick={changeSelectDomaine}
                      className={`md:w-[18rem`}
                    >
                      <button
                        className={`${
                          selectDomaine ? "bg-orange" : ""
                        } rounded-full text-[.9rem] text-primary px-[30px] py-[10px] md:py-[16px] md:px-[48px] w-full font-semibold`}
                      >
                        Nos domaines d’expertise
                      </button>
                    </div>
                    <div
                      onClick={changeSelectService}
                      className={`md:w-[18rem`}
                    >
                      <button
                        className={`${
                          selectService ? "bg-orange" : ""
                        } rounded-full text-[.9rem] text-primary px-[30px] py-[10px] md:py-[16px] md:px-[48px] w-full font-semibold`}
                      >
                        Nos services proposés
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {selectDomaine && (
                <div>
                  <div className="pt-[3rem]">
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 container pt-10 gap-y-4  md:gap-x-10">
                      {domaines.map((item: any, index) => {
                        return (
                          <Expertises
                            key={index}
                            domaine={true}
                            slug={item.slug}
                            name={item.title}
                            picture={item.picture}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
              {selectService && (
                <div>
                  <div className="pt-[3rem]">
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 container pt-10 gap-y-4  md:gap-x-10">
                      {services.map((item: any, index) => {
                        return (
                          <Expertises
                            key={index}
                            domaine={false}
                            open={item.open}
                            slug={item.slug}
                            name={item.title}
                            picture={item.picture}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}

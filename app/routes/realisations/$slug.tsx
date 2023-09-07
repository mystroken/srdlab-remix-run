import { DefaultLayout } from "~/layouts/default";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData, useMatches } from "@remix-run/react";
import { postes } from "~/data/postes";
import { header } from "~/data/header";
import type { HeaderType } from "~/types";
import { useEffect, useState } from "react";
import Logo from "../../../assets/imgs/srd-lab-logo.svg";
import LogoColor from "../../../assets/imgs/logo.png";

export const loader = async ({ params }: LoaderArgs) => {
  return json({ slug: params.slug });
};

export default function RealisationsSlug() {
  const { slug }: any = useLoaderData<typeof loader>();
  const myposte = postes[slug - 1];
  const [navbar, setNavbar] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const path = useMatches();
  const idPath = path[1].pathname;

  useEffect(() => {
    typeof slug === "string" ? setLoading(true) : setLoading(false);
  }, []);

  return (
    <>
      <DefaultLayout>
        <header>
          <div className={`fixed right-0 top-0 left-0 z-40 bg-primary`}>
            <div
              className="myheader container-other hover:rounded-xl my-4"
              onMouseLeave={() => setIsShow(false)}
              onMouseEnter={() => setIsShow(true)}
            >
              <div className="py-2 container mx-auto">
                <nav>
                  <div className="flex items-center justify-between">
                    <Link to="/">
                      {isShow === true ? (
                        <div>
                          <img
                            className={`logopng w-[13rem] h-[4.4rem] logocolor`}
                            src={LogoColor}
                            loading="lazy"
                            alt=""
                          />
                        </div>
                      ) : (
                        <div>
                          <img
                            className="logosvg w-[13rem] h-[4.4rem] logowhite"
                            src={Logo}
                            loading="lazy"
                            alt=""
                          />
                        </div>
                      )}
                    </Link>
                    <div
                      className="xl:hidden"
                      onClick={() => setNavbar(!navbar)}
                    >
                      <button>
                        <svg
                          className="h-8 w-8 fill-current text-white"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                      </button>
                    </div>
                    <div className="hidden xl:block">
                      <ul className="flex space-x-8 text-sm font-sans">
                        {header.map((item: HeaderType, index) => {
                          return (
                            <li key={index}>
                              <Link
                                to={`${item.link}`}
                                className={`${
                                  item.link === idPath
                                    ? "font-extrabold border rounded-full px-6 py-2 border-[#faaf42]"
                                    : "font-normal"
                                } text-sm ${
                                  item.link === "#travailleravecnous" ? "" : ""
                                }`}
                              >
                                {item.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                      navbar ? "block" : "hidden"
                    }`}
                  >
                    <ul className="flex flex-col items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 lg:hidden text-white">
                      {header.map((item: HeaderType, index) => {
                        return (
                          <li key={index}>
                            <Link
                              className="text-gray-800 font-medium text-sm mt-4"
                              to={`${item.link}`}
                            >
                              {item.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
        <div className="py-16 md:py-44">
          <div className="container mx-auto">
            {loading === false ? (
              <p>Chargement...</p>
            ) : (
              <div className="flex flex-row mt-16 md:mt-0">
                <div className="w-full lg:w-3/4">
                  <h4 className="my-2 leading-10 text-sm md:text-base">
                    {myposte.name}
                  </h4>
                  <h1 className="my-6 leading-10 text-xl md:text-3xl">
                    {myposte.title}
                  </h1>
                  <p className="mb-6 text-xs text-gray-600">
                    <span className={"underline outline-offset-4"}>
                      Date de clôture:
                    </span>{" "}
                    {myposte.date}
                    <div className={`my-4`}>
                      <p className="leading-8 font-semibold text-base">
                        Contexte
                      </p>
                      <p className="leading-8 font-normal">
                        {myposte.description}
                      </p>
                    </div>
                    <div className={`my-4`}>
                      <p className="leading-8 font-semibold text-base">
                        Description
                      </p>
                      <p className="leading-8 font-normal">
                        {myposte.description}
                      </p>
                    </div>
                    <div className={`my-4`}>
                      <p className="leading-8 font-semibold text-base">Role</p>
                      <ul>
                        {myposte.role?.map((item, index) => {
                          return (
                            <li className="leading-8 font-normal"> - {item}</li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className={`my-4`}>
                      <p className="leading-8 font-semibold text-base">
                        Qualifications et compétencese
                      </p>
                      <ul>
                        {myposte?.qualifications?.map((item, index) => {
                          return (
                            <li className="leading-8 font-normal"> - {item}</li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className={`my-4`}>
                      <p className="leading-8 font-semibold text-base">
                        Cadre de recrutement
                      </p>
                      <div>
                        <h4 className="mt-2 leading-10 text-sm">Position</h4>
                        <p className="leading-8 font-normal">
                          {myposte.recrutement?.position}
                        </p>
                      </div>
                      <div>
                        <h4 className="mt-2 leading-10 text-sm">
                          Localisation
                        </h4>
                        <p className="leading-8 font-normal">
                          {myposte.recrutement?.localisation}
                        </p>
                      </div>
                      <div>
                        <h4 className="mt-2 leading-10 text-sm">
                          Fermeture des postes
                        </h4>
                        <p className="leading-8 font-normal">
                          {myposte.recrutement?.fermeture}
                        </p>
                      </div>
                      <div>
                        <h4 className="mt-2 leading-10 text-sm">
                          Date de début de la mission
                        </h4>
                        <p className="leading-8 font-normal">
                          {myposte.recrutement?.debut}
                        </p>
                      </div>
                      <div>
                        <h4 className="mt-2 leading-10 text-sm">
                          Durée du contrat
                        </h4>
                        <p className="leading-8 font-normal">
                          {myposte.recrutement?.duree}
                        </p>
                      </div>
                      <div>
                        <h4 className="mt-2 leading-10 text-sm">
                          Comment postuler
                        </h4>
                        <p className="leading-8 font-normal">
                          {myposte.recrutement?.postuler}
                        </p>
                      </div>
                      <div>
                        <h4 className="mt-2 leading-10 text-sm">
                          Courriel pour la soumission
                        </h4>
                        <p className="leading-8 font-normal">
                          {myposte.recrutement?.courrier}
                        </p>
                      </div>
                      <div>
                        <p className="leading-8 font-normal">
                          {myposte.recrutement?.etape}
                        </p>
                      </div>
                      <div>
                        <h4 className="mt-2 leading-10 text-sm">
                          Avis sur l'égalité des chances
                        </h4>
                        <p className="leading-8 font-normal">
                          {myposte.recrutement?.egalite}
                        </p>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}

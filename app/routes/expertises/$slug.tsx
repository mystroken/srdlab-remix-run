import {DefaultLayout} from "~/layouts/default";
import type {LoaderArgs} from "@remix-run/node";
import {json} from "@remix-run/node";
import {Link, useLoaderData, useMatches,} from "@remix-run/react"
import {domaines} from "~/data/domaines";
import {header} from "~/data/header";
import type {HeaderType} from "~/types";
import {useEffect, useState} from "react";
import Logo from "../../../assets/imgs/srd-lab-logo.svg"
import LogoColor from "../../../assets/imgs/logo.png"
import {useTranslation} from "react-i18next";


export const loader = async ({params}: LoaderArgs) => {
    return json({slug: params.slug});
};

export async function loaderItem() {
    return json({name: "Ryan", date: new Date()});
}

export default function DomaineSlug() {

    const {slug}: any = useLoaderData<typeof loader>();
    const mydomaine = domaines[slug - 1]
    const [navbar, setNavbar] = useState(false);
    const [isShow, setIsShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const path = useMatches()
    const idPath = path[1].pathname

    let {i18n, t} = useTranslation();

    const changeLangItemClick = (lang: "fr" | "en") => {
        i18n.changeLanguage(lang);
    };

    useEffect(() => {
        typeof slug === "string" ? setLoading(true) : setLoading(false)
    }, [i18n.language]);


    return (
        <>
            <DefaultLayout>
                <header>
                    <div className={`fixed right-0 top-0 left-0 z-40 bg-primary`}>
                        <div className="myheader container-other hover:rounded-xl my-4"
                             onMouseLeave={() => setIsShow(false)}
                             onMouseEnter={() => setIsShow(true)}
                        >
                            <div className="py-2 container mx-auto">
                                <nav>
                                    <div className="flex items-center justify-between">
                                        <Link to="/">
                                            {
                                                isShow === true ?
                                                    (<div>
                                                        <img className={`logopng w-[13rem] h-[4.4rem] logocolor`}
                                                             src={LogoColor} alt=""/>
                                                    </div>) : (
                                                        <div>
                                                            <img className="logosvg w-[13rem] h-[4.4rem] logowhite"
                                                                 src={Logo} alt=""/>
                                                        </div>
                                                    )
                                            }
                                        </Link>
                                        <div className="xl:hidden" onClick={() => setNavbar(!navbar)}>
                                            <button>
                                                <svg className="h-8 w-8 fill-current text-white" fill="none"
                                                     strokeLinecap="round" strokeLinejoin="round"
                                                     strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="hidden xl:block">
                                            <ul className="flex space-x-8 text-sm font-sans items-center">
                                                {
                                                    header.map((item: HeaderType, index) => {
                                                        return (
                                                            <li key={index}>
                                                                <Link to={`${item.link}`}
                                                                      className={`${item.link === idPath ? 'font-extrabold border rounded-full px-6 py-2 border-[#faaf42]' : 'font-normal'} text-sm ${item.link === '#travailleravecnous' ? '' : ''}`}>{t(item.name)}</Link>
                                                            </li>
                                                        )
                                                    })
                                                }
                                                <select
                                                    onChange={(e: any) =>
                                                        changeLangItemClick(e.target.value)
                                                    }
                                                    className="border bg-gray-500 px-1.5 py-2 border-gray-600 text-gray-100 text-sm rounded-lg flex items-center justify-center"
                                                >
                                                    <option value="en">En</option>
                                                    <option value="fr">Fr</option>
                                                </select>
                                            </ul>
                                        </div>
                                    </div>
                                    <div
                                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                                        }`}
                                    >
                                        <ul className="flex flex-col items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 lg:hidden text-white">
                                            {
                                                header.map((item: HeaderType, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <Link className="text-gray-800 font-medium text-sm mt-4"
                                                                  to={`${item.link}`}>{item.name}</Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="py-16 md:py-44">
                    <div className="container mx-auto">
                        {
                            loading === false ? <p>Chargement...</p> :
                                <div className="flex flex-row mt-16 md:mt-0">
                                    <div className="w-full lg:w-3/4">
                                        <h1 className="my-6 leading-10 text-xl md:text-3xl">
                                            {mydomaine.title}
                                        </h1>
                                        <h4 className="my-2 leading-10 text-sm md:text-base">
                                            {mydomaine.subtitle}
                                        </h4>
                                        <div className="pt-[3rem]">
                                            <div className="grid md:grid-cols-2 grid-cols-1 gap-y-4">
                                                {
                                                    mydomaine.childs.map((item: any, index) => {
                                                        // console.log("CHILD ->", item)
                                                        return (
                                                            <Link state={{data: item}}
                                                                  to={{pathname: `/expertises/domaine`}}
                                                                  key={index}
                                                                  className="h-44 md:h-40 md:mb-6 md:w-11/12 cursor-pointer">
                                                                <div
                                                                    className="p-4 border border-gray-400 hover:border-orange hover:bg-orange hover:border-2 flex items-center flex-col justify-center rounded-md h-full">
                                                                    <h2
                                                                        className="text-center md:w-[14rem] xl:w-[18rem] text-[1.1rem] text-primary">{item.title}</h2>
                                                                </div>
                                                            </Link>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </DefaultLayout>
        </>
    )
}

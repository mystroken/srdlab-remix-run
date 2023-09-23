import type {LoaderArgs} from "@remix-run/node";
import {json} from "@remix-run/node";
import {Link, useLoaderData, useMatches,} from "@remix-run/react"
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {DefaultLayout} from "~/layouts/default";
import {header} from "~/data/header";
import {HeaderType} from "~/types";
import Logo from "../../../../assets/imgs/srd-lab-logo.svg"
import LogoColor from "../../../../assets/imgs/logo.png"
import {TEAM} from "~/data/images";
import { servicesProposes } from "~/data/domaine-services";


export const loader = async ({params}: LoaderArgs) => {
    return json({slug: params.slug});
};

export default function ServiceSlug() {

    const {slug}: any = useLoaderData<typeof loader>();
    const [navbar, setNavbar] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const path = useMatches();
    const idPath = path[1].pathname;
    const [selectTab, setSelectTab] = useState(1);

    let {i18n, t} = useTranslation();

    const changeLangItemClick = (lang: "fr" | "en") => {
        i18n.changeLanguage(lang);
    };

    useEffect(() => {
        typeof slug === "string" ? setLoading(true) : setLoading(false)
    }, [i18n.language]);

    console.log("SERVICE ---->", slug);


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
                                <div className={"pt-20 md:pt-0"}>
                                    <div
                                        className={`flex space-y-4 md:space-y-0 md:space-x-4 md:flex-row flex-col`}>
                                        {servicesProposes[slug].childs.map((item: any, index: number) => {
                                            return (
                                                <button
                                                    onClick={() => setSelectTab(item.slug)}
                                                    key={index}
                                                    className={`${item.slug === selectTab ? 'bg-orange' : ''} rounded-full text-[.9rem] text-primary px-[30px] py-[10px] md:px-[48px] font-semibold w-full`}>
                                                    {item.title}
                                                </button>
                                            );
                                        })
                                        }
                                    </div>
                                    <div>
                                        {servicesProposes[slug].childs.map((item: any, index: number) => {
                                            return (
                                                <div
                                                    className={`${item.slug === selectTab ? 'flex flex-col' : 'hidden'} w-full`}>
                                                    <div className="py-6 md:py-12">
                                                        <div className="container mx-auto">
                                                            <div className="flex flex-row space-x-12">
                                                                <div className="w-full lg:w-3/4">
                                                                    <h1 className="text-primary mt-1 text-xl md:leading-[120%] md:text-[2rem] text-justify py-4 md:py-0">
                                                                        {item.title}
                                                                    </h1>
                                                                    <p
                                                                        className={`mt-2 md:mt-10 text-[#333333] text-sm md:text-[1rem] text-justify leading-[175%]`}
                                                                    >
                                                                        {item.content}
                                                                    </p>
                                                                </div>
                                                                <div
                                                                    className={'row hidden md:flex md:w-1/2 space-x-2'}>
                                                                    <div className={"rounded-md h-full w-full"}>
                                                                        <img src={TEAM} loading={"lazy"}
                                                                             className={'h-full rounded-lg object-cover'}/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </DefaultLayout>
        </>
    );
}

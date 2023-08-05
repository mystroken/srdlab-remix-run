import React, {useState} from "react";
import {DefaultLayout} from "~/layouts/default";
import {header} from "~/data/header";
import {Link, useMatches} from "@remix-run/react";
import LogoColor from "../../assets/imgs/logo.png";
import Logo from "../../assets/imgs/srd-lab-logo.svg";
import {HeaderType, PosteType} from "~/types";
import {postes} from "~/data/postes";
import Post from "~/components/postes";

export default function OffresEmplois() {
    const [navbar, setNavbar] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [openAll, setOpenAll] = useState(true)
    const [openActu, setOpenActu] = useState(false)
    const [openFerme, setOpenFerme] = useState(false)
    const [bar, setMyBar] = useState(false)
    const path = useMatches()
    const idPath = path[1].pathname

    const selectActu = () => {
        setOpenActu(true)
        setOpenAll(false)
        setOpenFerme(false)
    }

    const selectFerme = () => {
        setOpenFerme(true)
        setOpenAll(false)
        setOpenActu(false)
    }

    const selectAll = () => {
        setOpenAll(true)
        setOpenFerme(false)
        setOpenActu(false)
    }

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
                                            <ul className="flex space-x-8 text-sm font-sans">
                                                {
                                                    header.map((item: HeaderType, index) => {
                                                        return (
                                                            <li key={index}>
                                                                <Link to={`${item.link}`}
                                                                      className={`${item.link === idPath ? 'font-extrabold border rounded-full px-6 py-2 border-[#faaf42]' : 'font-normal'} text-sm ${item.link === '#travailleravecnous' ? '' : ''}`}>{item.name}</Link>
                                                            </li>
                                                        )
                                                    })
                                                }
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
                <div className="container mx-auto">
                    <div className="py-16 md:py-44">
                        <div className={"flex mt-20 md:mt-0 flex-row justify-center items-center space-x-8 text-sm font-normal"}>
                            <div
                                onClick={selectAll}
                                className={`cursor-pointer ${openAll ? 'bg-orange rounded-full text-xs px-4 py-2' : ''}`}>TOUT
                            </div>
                            <div className={`${openActu ? 'bg-orange rounded-full text-xs px-4 py-2' : ''} cursor-pointer`}
                                 onClick={selectActu}>ACTU
                            </div>
                            <div className={`${openFerme ? 'bg-orange rounded-full text-xs px-4 py-2' : ''} cursor-pointer`}
                                 onClick={selectFerme}>FERMES
                            </div>
                        </div>
                        <div
                            className="grid sm:grid-cols-2 md:grid-cols-3 container pt-10 gap-y-4  md:gap-x-10">
                            {
                                openAll && postes.map((item: PosteType, index: number) => {
                                    return (
                                        <Post key={index} open={item.open} slug={item.slug} name={item.name}
                                              title={item.title} date={item.date} role={item.role}
                                              context={item.context} description={item.description}/>
                                    );
                                })
                            }
                            {
                                openActu && postes.map((item: PosteType, index: number) => {
                                    while (item.open === openActu) {
                                        return (
                                            <Post key={index} open={item.open} slug={item.slug} name={item.name}
                                                  title={item.title} date={item.date} role={item.role}
                                                  context={item.context} description={item.description}/>
                                        );
                                    }
                                })
                            }
                            {
                                openFerme && postes.map((item: PosteType, index: number) => {
                                    while (item.open === false) {
                                        return (
                                            <Post key={index} open={item.open} slug={item.slug} name={item.name}
                                                  title={item.title} date={item.date} role={item.role}
                                                  context={item.context} description={item.description}/>
                                        );
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </>
    )
}
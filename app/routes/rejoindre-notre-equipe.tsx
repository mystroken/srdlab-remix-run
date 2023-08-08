import {DefaultLayout} from "~/layouts/default";
import Rejoindre from "~/components/rejoindre";
import {header} from "~/data/header";
import {Link, useMatches} from "@remix-run/react";
import LogoColor from "../../assets/imgs/logo.png";
import Logo from "../../assets/imgs/srd-lab-logo.svg";
import {HeaderType} from "~/types";
import React, {useState} from "react";


export default function RejoindreNotreEquipe() {
    const [navbar, setNavbar] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const path = useMatches()
    const idPath = path[1].pathname
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
                <div className="py-16 md:py-44">
                    <Rejoindre/>
                </div>
            </DefaultLayout>
        </>
    )
}
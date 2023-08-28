import {DefaultLayout} from "~/layouts/default";
import {Link, useLocation, useMatches} from "@remix-run/react"
import {header} from "~/data/header";
import type {HeaderType} from "~/types";
import {useState} from "react";
import Logo from "../../../../assets/imgs/srd-lab-logo.svg"
import LogoColor from "../../../../assets/imgs/logo.png"


export default function DomaineExpertiseSlug() {
    const location = useLocation()
    const [navbar, setNavbar] = useState(false);
    const [isShow, setIsShow] = useState(false)
    const path = useMatches()
    const idPath = path[1].pathname
    const data = location.state.data

    console.log("SLUG =>", location.state.data)


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
                    <div className="container mx-auto">
                        <div className="flex flex-row mt-16 md:mt-0">
                            <div className="w-full lg:w-3/4">
                                <h1 className="my-6 leading-10 text-xl md:text-3xl">
                                    {data.title}
                                </h1>
                                <p className="my-6 text-xs text-gray-600">{data.content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </>
    )
}

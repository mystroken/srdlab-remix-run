import Logo from "../../../assets/imgs/srd-lab-logo.svg"
import LogoColor from "../../../assets/imgs/logo.png"
import BtnNext from "../../../assets/imgs/next.png"
import BtnPrevious from "../../../assets/imgs/previous.png"
import styles from "./styles.css"
import { useState } from "react"
import { Link, useMatches } from "@remix-run/react"
import { header } from "~/data/header"
import type { HeaderType } from "~/types"

export function links() {
    return [{ rel: "stylesheet", href: styles }]
}

interface BannerComponentProps {
    title: string
    content: string
    arrow?: boolean
}


export default function BannerComponent({ title, content, arrow, ...props }: BannerComponentProps) {
    const [navbar, setNavbar] = useState(false);
    const [isShow, setIsShow] = useState(false)
    const path = useMatches()

    const idPath = path[1].pathname
    return (
        <div className="bg-center bg-cover bg-[url('assets/imgs/banner.png')] z-50">
            <header className="bg-center bg-cover">
                <div className="fixed right-0 top-0 left-0 z-40">
                    <div className="myheader container-other hover:rounded-xl my-4"
                        onMouseLeave={() => setIsShow(false)}
                        onMouseEnter={() => setIsShow(true)}
                    >
                        <div className="py-4 container mx-auto">
                            <nav>
                                <div className="flex items-center justify-between">
                                    <Link to="/">
                                        {
                                            isShow === true ?
                                                (<div>
                                                    <img className={`logopng w-[13rem] h-[4.4rem] logocolor`} src={LogoColor} alt="" />
                                                </div>) : (
                                                    <div>
                                                        <img className="logosvg w-[13rem] h-[4.4rem] logowhite" src={Logo} alt="" />
                                                    </div>
                                                )
                                        }
                                    </Link>
                                    <div className="xl:hidden" onClick={() => setNavbar(!navbar)}>
                                        <button>
                                            <svg className="h-8 w-8 fill-current text-white" fill="none" strokeLinecap="round" strokeLinejoin="round"
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
                                                        <Link to={`${item.link}`} className={`${item.link === idPath ? 'font-extrabold border rounded-full px-6 py-2 border-[#faaf42]' : 'font-normal'} text-sm ${item.link === '#travailleravecnous' ? '' : ''}`}>{item.name}</Link>
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
                                                        <Link className="text-gray-800 font-medium text-sm mt-4" to={`${item.link}`}>{item.name}</Link>
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
            </header >
            <header className="bg-center  bg-cover z-40 pt-[6.5rem]">
                <div className="py-4 container mx-auto sticky top-0 z-20">
                    <div className="mt-[4.4rem] md:mt-[8.8rem] md:w-[44rem] mb-36">
                        <h1
                            className="text-white text-2xl text-center md:text-start md:text-[2.93rem] md:mr-8 leading-[2rem] md:leading-[120%]">
                            {title}
                        </h1>
                        {arrow === true ?
                            <hr className="my-8 h-1 bg-orange w-44 mx-auto md:mx-0" /> : <div className="my-8" />
                        }
                        <p className="text-white text-lg md:text-[1.25rem] md:w-3/4 text-center md:text-start leading-[1.7rem]">
                            {content}
                        </p>
                        {arrow === true ?
                            <div className="flex justify-center md:justify-end mt-16">
                                <button className="w-6 h-6 mx-2">
                                    <img src={BtnPrevious} alt="" />
                                </button>
                                <button className="w-6 h-6 mx-2">
                                    <img src={BtnNext} alt="" />
                                </button>
                            </div>
                            : <div />
                        }
                    </div>
                </div>
            </header>
        </div >
    )
}
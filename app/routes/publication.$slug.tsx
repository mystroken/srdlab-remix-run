import { DefaultLayout } from "~/layouts/default";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData, useMatches, } from "@remix-run/react"
import { publications } from "~/data/publications";
import { header } from "~/data/header";
import type { HeaderType, PublicationType } from "~/types";
import { useEffect, useState } from "react";
import Logo from "../../assets/imgs/srd-lab-logo.svg"
import LogoColor from "../../assets/imgs/logo.png"
import { NEWLETTER } from "~/data/images";
import Clock from "../../assets/imgs/clock.svg"


export const loader = async ({ params }: LoaderArgs) => {
    return json({ slug: params.slug });
};



export default function PublicationSlug() {
    const handleScrollToTop = async () => {
        await setTimeout(() => {
            setLoading(true)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 900)
        setLoading(false)
    }
    const { slug }: any = useLoaderData<typeof loader>();
    const mypublication = publications[slug - 1]
    const [navbar, setNavbar] = useState(false);
    const [isShow, setIsShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const path = useMatches()
    const idPath = path[1].pathname

    useEffect(() => {
        typeof slug === "string" ? setLoading(true) : setLoading(false)
    }, [])


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
                </header>
                <div className="py-16 md:py-44">
                    <div className="container mx-auto">
                        <img src={NEWLETTER} alt="pic" className="w-16 h-16 mt-16 md:mt-0" />
                        {
                            loading === false ? <p>Chargement...</p> :
                                <div className="flex flex-row">
                                    <div className="w-full lg:w-3/4">
                                        <h1 className="my-6 leading-10 text-xl md:text-3xl">
                                            {mypublication.title}
                                        </h1>
                                        <p className="mb-6 text-xs text-gray-600">{mypublication.date}</p>
                                        <p className="leading-8">{mypublication.content}</p>
                                    </div>
                                </div>
                        }
                        <hr className="my-8" />
                        <p className="underline underline-offset-8 font-semibold text-gray-700">Les autres articles</p>
                        <div className="grid sm:grid-cols-2 md:grid-cols-4 -mx-1 lg:-mx-4 container pt-10">
                            {
                                publications.map((item: PublicationType, index) => {
                                    return (
                                        <div className="my-1 px-1 lg:my-4 lg:px-4" key={index}>
                                            <article className="rounded-lg mb-4 md:mb-0">
                                                <div className="w-full h-[10rem] bg-gray-300"></div>
                                                <div className="p-2 md:p-4 mt-9">
                                                    <div className="flex items-center my-auto">
                                                        <img src={Clock} className="w-[1.2rem] h-[1.2rem]" alt="" />
                                                        <p className="pl-2 text-[.8rem] leading-[170%]">
                                                            {item.date}
                                                        </p>
                                                    </div>
                                                    <Link to={`/publication/${index + 1}`} onClick={handleScrollToTop} className="text-primary py-3 text-[1rem] leading-[155%] font-semibold cursor-pointer hover:underline hover:underline-offset-4">
                                                        {item.title}
                                                    </Link>
                                                    {/* <p className="pt-[.6rem] text-[.8rem] leading-[170%] text-[#505A62] truncate">
                                                    {item.content}
                                                </p> */}
                                                </div>
                                            </article>
                                        </div>
                                    )
                                })

                            }
                        </div>
                    </div>
                </div >
            </DefaultLayout >
        </>
    )
}
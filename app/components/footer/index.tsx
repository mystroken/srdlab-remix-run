import {Link} from "@remix-run/react"
import {useState} from "react"
import {socials} from "~/data/footer"
import type {Socials} from "~/types"
import SrdLabLogo from "../../../assets/imgs/srd-lab-logo.svg"
import UpArrow from "../../../assets/imgs/uparrow.png"
import {Button} from "../commons/button"
import {Modal} from "../commons/modal"


export default function FooterComponent() {
    const handleScrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
    const [contact, setContact] = useState(false)
    return (
        <footer className="bg-primary pt-10">
            <div className="container mx-auto py-10">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full flex justify-center md:justify-start md:1/4">
                        <div className="w-3/4">
                            <img src={SrdLabLogo} alt="logo"/>
                        </div>
                    </div>
                    <div className="w-full md:1/4 my-6 md:my-0 text-center md:text-start">
                        <div
                            className="flex flex-col justify-center items-center md:items-start text-center text-xl md:text-start">
                            <p className="text-lg md:text-xl font-bold text-white">
                                Contact
                            </p>
                            <ul>
                                <li>
                                    <p className="text-xs text-gray-300 mt-2">12606 Douala-Bonanjo</p>
                                    <p className="text-xs text-gray-300 mt-1">Douala, Cameroun</p>
                                    <p className="text-xs text-gray-100 mt-1"><b>+237 654835565</b></p>
                                </li>
                            </ul>
                            <ul className={`mt-2`}>
                                <li>
                                    <p className="text-xs text-gray-300 mt-1">8 Cosgrove Close</p>
                                    <p className="text-xs text-gray-300 mt-1">L6 0DQ Liverpool, UK</p>
                                    <p className="text-xs text-gray-100 mt-1"><b>+44 7713 489610</b></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:1/4 my-6 md:my-0">
                        <div className="flex flex-col text-center text-xl md:text-start">
                            <p className="text-lg md:text-xl font-bold text-white">
                                Go Social
                            </p>
                            <div className="flex justify-center md:justify-start mt-4">
                                {
                                    socials.map((item: Socials, index) => {
                                        return (<Link key={index} to={item.path}>
                                            <img className="w-6 h-6 mr-4" src={item.picture} alt=""/>
                                        </Link>)
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center md:1/4 flex-col items-center">
                        <div className="md:w-[14rem]" onClick={() => setContact(true)}>
                            <Button name="Contactez-nous"/>
                        </div>
                        <div className="border-2 rounded-full w-12 h-12 flex items-center justify-center mt-4">
                            <button onClick={handleScrollToTop}>
                                <img className="h-6 w-auto" src={UpArrow} alt="up"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="pt-14 md:pt-28">
                    <p className="text-white text-center text-xs">
                        Copyright &copy; 2023 SRD Lab, Tous droits
                        reservés.
                    </p>
                </div>
            </div>
            {
                contact && (
                    <Modal
                        onClose={() => setContact(false)}
                        title="Contact"
                    >
                        <form>
                            <div className={"mb-2"}>
                                <p className='text-sm py-2'>Nom complet</p>
                                <input type="text" className='px-6 rounded-md py-1 bg-white border-2 w-full'/>
                            </div>
                            <div className={"mb-2"}>
                                <p className='text-sm py-2'>Adresse email</p>
                                <input type="text" className='px-6 rounded-md py-1 bg-white border-2 w-full'/>
                            </div>
                            <div className={"mb-2"}>
                                <p className='text-sm py-2'>Message</p>
                                <textarea cols={4} rows={6}
                                          className='px-6 rounded-md py-1 bg-white border-2 w-full'/>
                            </div>
                            <div className="flex flex-row space-x-4 items-center justify-end my-6">
                                <div className="flex justify-center items-center w-28">
                                    <button onClick={() => setContact(false)} className="font-semibold text-sm">
                                        Annuler
                                    </button>
                                </div>
                                <div className="md:w-[14rem]" onClick={() => setContact(false)}>
                                    <Button name="Valider"/>
                                </div>
                            </div>
                        </form>
                    </Modal>
                )
            }
        </footer>
    )
}
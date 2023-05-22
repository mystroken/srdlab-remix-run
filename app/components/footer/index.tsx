import { footer } from "~/data/footer"
import SrdLabLogo from "../../../assets/imgs/srd-lab-logo.svg"
import UpArrow from "../../../assets/imgs/uparrow.png"


export default function FooterComponent() {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return (
        <footer className="bg-primary pt-16 md:pt-32">
            <div className="container mx-auto py-16 md:py-20">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full flex justify-center md:justify-start md:1/4">
                        <div>
                            <img src={SrdLabLogo} alt="logo" />
                        </div>
                    </div>
                    <div className="w-full md:1/2 my-6 md:my-0">
                        <div className="flex flex-col text-center text-xl md:text-start">
                            <p className="text-lg md:text-xl font-bold text-white">
                                Contactez-nous
                            </p>
                            <h3 className="text-2xl md:text-3xl font-extrabold py-3 md:py-7 text-orange">
                                +33 (0) 760535743
                            </h3>
                        </div>
                        <nav className="flex flex-col md:flex-row">
                            <ul className="w-full md:w-1/2">
                                <h4 className="py-2 md:py-4 font-bold text-white text-center md:text-start text-[1rem] leading-[1.32rem]">
                                    Adresse
                                </h4>
                                {
                                    footer.map((item, index) => {
                                        return <li className="text-sm text-white leading-7 text-center md:text-start" key={index}>
                                            {item}
                                        </li>
                                    })
                                }
                            </ul>
                        </nav>
                    </div>
                    <div className="w-full flex justify-center md:1/4">
                        <div className="border-2 rounded-full w-20 h-20 p-4">
                            <button onClick={handleScrollToTop}>
                                <img className="w-16 h-auto" src={UpArrow} alt="up" />
                            </button>
                        </div>
                    </div>
                </div><div className="pt-14 md:pt-28">
                    <p className="text-white text-center text-xs">
                        Copyright &copy; 2023 SRD Lab, Tous droits
                        reservés.
                    </p>
                </div>
            </div >
        </footer >
    )
}
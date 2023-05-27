import { useEffect, useState } from "react";
import { DG, ESC, RISD, WB } from "~/data/images";

export default function ConfianceComponent() {

    let [mySize, setMySize]: any = useState("")

    useEffect(() => {
        window.addEventListener('resize', changeResize)
        mySize = window.document.querySelector(".wid");
    })

    const changeResize = () => {
        if (window.innerWidth < 900) {
            setMySize(true)
        }
    }

    return (
        <div className="bg-white">
            <div className="pt-[7rem] md:py-[7rem]">
                <div className="mx-auto">
                    <p className="text-[##0E3758] mt-2 text-center text-lg mx-auto md:text-xl">Ils nous font confiance</p>
                </div>
                <div className="container mx-auto">
                    <div className={`wscroolpub grid ${mySize === true ? 'mymarq' : ''} sm:grid-cols-2 md:grid-cols-4 -mx-1 lg:-mx-4 container py-10`}>
                        <div className="my-1 px-1 lg:my-4 lg:px-4">
                            <div className="w-full h-[4rem]">
                                <img src={DG} alt="" className="w-full object-cover" />
                            </div>
                        </div>
                        <div className="px-1 my-8 md:my-4 lg:px-4">
                            <div className="w-full h-[4rem]">
                                <img src={ESC} alt="" className="w-full object-cover" />
                            </div>
                        </div>
                        <div className="px-1 my-8 md:my-4 lg:px-4">
                            <div className="w-full h-[4rem]">
                                <img src={WB} alt="" className="w-full object-cover" />
                            </div>
                        </div>
                        <div className="px-1 my-8 md:my-4 lg:px-4">
                            <div className="w-full h-[4rem]">
                                <img src={RISD} alt="" className="w-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import {useEffect, useState} from "react";
import {DG, ESC, RISD, WB} from "~/data/images";
import {confiances} from "~/data/confiances";

export default function ConfianceComponent() {

    let [mySize, setMySize]: any = useState("")

    useEffect(() => {
        window.addEventListener('resize', changeResize)
        mySize = window.document.querySelector(".wid");
    })

    const changeResize = () => {
        if (window.innerWidth > 900) {
            setMySize(true)
        }
    }

    return (
        <div className="bg-white">
            <div className="pt-[7rem] md:py-[7rem]">
                <div className="mx-auto">
                    <p className="text-[##0E3758] mt-2 text-center text-lg mx-auto md:text-xl">Ils nous font
                        confiance</p>
                </div>
                <div className="container mx-auto">
                    <div
                        className={`wscroolpub grid ${mySize === true ? '' : ''} sm:grid-cols-3  md:grid-cols-4 xl:grid-cols-5 -mx-1 lg:-mx-4 container py-10`}>
                        {
                            confiances.map((item, index) => {
                                return (
                                    <div className="my-1 px-1 lg:my-4 lg:px-4">
                                        <div className="w-full h-[4rem]">
                                            <img src={item} alt="" className="w-full object-cover"/>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
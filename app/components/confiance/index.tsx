import DG from "../../../assets/imgs/partners/dg_logo.jpg"
import ESC from "../../../assets/imgs/partners/esc_logo.jpg"
import IHFRA from "../../../assets/imgs/partners/ihfra_logo.jpg"
import RISD from "../../../assets/imgs/partners/risd_logo.jpg"
import WB from "../../../assets/imgs/partners/wb.jpg"

export default function ConfianceComponent() {
    return (
        <div className="bg-white">
            <div className="py-[7rem]">
                <div className="mx-auto">
                    <p className="text-[##0E3758] mt-2 text-center text-lg mx-auto md:text-xl">Ils nous font confiance</p>
                </div>
                <div className="container mx-auto">
                    <div className="scroolpub grid sm:grid-cols-2 md:grid-cols-4 -mx-1 lg:-mx-4 container py-10">
                        <div className="my-1 px-1 lg:my-4 lg:px-4">
                            <div className="w-full h-[10rem]">
                                <img src={DG} alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="my-1 px-1 lg:my-4 lg:px-4">
                            <div className="w-full h-[10rem]">
                                <img src={ESC} alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="my-1 px-1 lg:my-4 lg:px-4">
                            <div className="w-full h-[10rem]">
                                <img src={WB} alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="my-1 px-1 lg:my-4 lg:px-4">
                            <div className="w-full h-[10rem]">
                                <img src={RISD} alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}